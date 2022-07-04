import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  IProductDocument,
  IProductModel,
  TReview,
  ICreateProduct,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class ProductDataSource extends MongoDataSource<
  IProductDocument,
  IContext
> {
  private Product: IProductModel;

  constructor(ProductModel: IProductModel) {
    super(ProductModel);
    this.Product = ProductModel;
  }
  async getProduct(productId: string) {
    return await this.findOneById(productId);
  }

  async getProducts(
    filter: FilterQuery<IProductDocument>,
    options: IPaginateOption<unknown>
  ) {
    return await this.Product.paginate(filter, options);
  }

  async createProduct(product: ICreateProduct) {
    return await await this.model.create(product);
  }

  async updateProduct(productId: string, data: FilterQuery<IProductDocument>) {
    const product = await this.getProduct(productId);
    if (!product) {
      throw new GraphQlApiError(
        'Product not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(product, data);
    await product.save();
    return product;
  }

  async deleteProduct(productId: string) {
    const product = await this.getProduct(productId);
    if (!product) {
      throw new GraphQlApiError(
        'Product not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await product.remove();
    return product;
  }

  async getTopProducts(
    filter: FilterQuery<IProductDocument>,
    options: IPaginateOption<unknown>
  ) {
    const products = await this.Product.paginate(filter, options);
    if (products) {
      return await this.Product.find({}).sort({ rating: -1 });
    }
  }

  async createProductReview(productId: string, review: TReview) {
    const product = await this.getProduct(productId);
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === review.user.id.toString()
      );

      if (alreadyReviewed) {
        throw new GraphQlApiError(
          'Product already reviewed',
          EGraphQlErrorCode.PERSISTED_QUERY_NOT_SUPPORTED
        );
      }

      product.reviews.push(review);

      product.numReviews = product.reviews.length;

      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      return product;
    } else {
      throw new GraphQlApiError(
        'Product not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
  }
}
