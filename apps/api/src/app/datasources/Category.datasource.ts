import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  ICategoryDocument,
  ICategoryModel,
  TCategory,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class CategoryDataSource extends MongoDataSource<
  ICategoryDocument,
  IContext
> {
  private Category: ICategoryModel;

  constructor(CategoryModel: ICategoryModel) {
    super(CategoryModel);
    this.Category = CategoryModel;
  }

  async getCategory(categoryId: string) {
    return await this.findOneById(categoryId);
  }

  async getCategories(
    filter: FilterQuery<ICategoryDocument>,
    options: IPaginateOption<unknown>
  ) {
    return await this.Category.paginate(filter, options);
  }

  async createCategory(category: TCategory) {
    return this.model.create(category);
  }

  async updateCategory(
    categoryId: string,
    data: FilterQuery<ICategoryDocument>
  ) {
    console.log(categoryId);
    const category = await this.getCategory(categoryId);
    if (!category) {
      throw new GraphQlApiError(
        'Category not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(category, data);
    await category.save();
    return category;
  }

  async deleteCategory(categoryId: string) {
    const category = await this.getCategory(categoryId);
    if (!category) {
      throw new GraphQlApiError(
        'Category not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await category.remove();
    return category;
  }
}
