import {
  EGraphQlErrorCode,
  ICreateCategory,
  IUpdateCategory,
} from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createCategory(input: { data: ICreateCategory }, ctx: IContext) {
  const blog = await ctx.dataSources.categories.createCategory(input.data);

  return blog;
}

interface IGetCategoryArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getCategories(data: IGetCategoryArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.categories.getCategories(
    filter,
    options
  );
  return result;
}

async function getCategory(data: { categoryId: string }, ctx: IContext) {
  const category = await ctx.dataSources.categories.getCategory(
    data.categoryId
  );
  if (!category) {
    throw new GraphQlApiError(
      'Category not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return category;
}

async function updateCategory(data: { data: IUpdateCategory }, ctx: IContext) {
  const categoryId = data.data.id;
  return await ctx.dataSources.categories.updateCategory(categoryId, data.data);
}

async function deleteCategory(data: { categoryId: string }, ctx: IContext) {
  await ctx.dataSources.categories.deleteCategory(data.categoryId);
  return 'Deleted';
}

export default {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
