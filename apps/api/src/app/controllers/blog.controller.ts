import { EGraphQlErrorCode, TBlog } from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createBlog(data: TBlog, ctx: IContext) {
  const blog = await ctx.dataSources.blogs.createBlog(data);
  return blog;
}

interface IGetBlogArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getBlogs(data: IGetBlogArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.users.getUsers(filter, options);
  return result;
}

async function getBlog(data: { blogId: string }, ctx: IContext) {
  const blog = await ctx.dataSources.blogs.getBlog(data.blogId);
  if (!blog) {
    throw new GraphQlApiError(
      'Blog not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return blog;
}

async function updateBlog(
  data: { blogId: string; data: TBlog },
  ctx: IContext
) {
  return await ctx.dataSources.blogs.updateBlog(data.blogId, data.data);
}

async function deleteBlog(data: { blogId: string }, ctx: IContext) {
  await ctx.dataSources.blogs.deleteBlog(data.blogId);
  return 'Deleted';
}

export default {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
