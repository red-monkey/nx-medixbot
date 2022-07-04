import {
  EAWSS3BucketName,
  EGraphQlErrorCode,
  ICreateProduct,
  ICreateReview,
  IUpdateProduct,
  TCategory,
  TUser,
} from '@medixbot/types';
import { awsService } from '../services';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createProduct(
  input: { data: ICreateProduct & { user: TUser; category: TCategory } },
  ctx: IContext
) {
  const createData = input.data;

  //set Product user
  createData.user = ctx.user;

  //set product category
  const category = await ctx.dataSources.categories.getCategory(
    createData.categoryRef
  );
  if (!category) {
    throw new GraphQlApiError(
      'Category not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  createData.category = category;

  //upload image
  const s3 = new awsService.AWSS3();
  if (input.data.image) {
    const file = await s3.uploadFile(
      input.data.image,
      EAWSS3BucketName.PROFILE_IMAGES
    );
    createData.image = `/rest/images/${file.key}`;
  }
  const product = await ctx.dataSources.products.createProduct(createData);

  return product;
}

interface IGetProductsArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getProducts(data: IGetProductsArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.products.getProducts(filter, options);
  return result;
}

async function getProduct(data: { productId: string }, ctx: IContext) {
  const product = await ctx.dataSources.products.getProduct(data.productId);
  if (!product) {
    throw new GraphQlApiError(
      'Product not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return product;
}

async function updateProduct(
  data: { productId: string; data: IUpdateProduct },
  ctx: IContext
) {
  return await ctx.dataSources.products.updateProduct(
    data.productId,
    data.data
  );
}

async function deleteProduct(data: { productId: string }, ctx: IContext) {
  await ctx.dataSources.products.deleteProduct(data.productId);
  return 'Deleted';
}

async function getTopProducts(data: IGetProductsArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.products.getTopProducts(filter, options);
  return result;
}

async function createProductReview(
  data: { productId: string; data: ICreateReview & { user: TUser } },
  ctx: IContext
) {
  const review = data.data;
  review.user = ctx.user;
  await ctx.dataSources.products.createProductReview(data.productId, review);
  return 'Review added';
}

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getTopProducts,
  createProductReview,
};
