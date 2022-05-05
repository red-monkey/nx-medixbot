import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  IBlogDocument,
  EGraphQlErrorCode,
  TBlog,
  IBlogModel,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class BlogDataSource extends MongoDataSource<IBlogDocument, IContext> {
  private Blog: IBlogModel;

  constructor(BlogModel: IBlogModel) {
    super(BlogModel);
    this.Blog = BlogModel;
  }
  async getBlog(blogId: string) {
    return await this.findOneById(blogId);
  }

  async getBlogs(
    filter: FilterQuery<IBlogDocument>,
    options: IPaginateOption<unknown>
  ) {
    return await this.Blog.paginate(filter, options);
  }

  async createBlog(blog: TBlog) {
    return this.model.create(blog);
  }

  async updateBlog(blogId: string, data: FilterQuery<IBlogDocument>) {
    const blog = await this.getBlog(blogId);
    if (!blog) {
      throw new GraphQlApiError(
        'Blog not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(blog, data);
    await blog.save();
    return blog;
  }

  async deleteBlog(blogId: string) {
    const blog = await this.getBlog(blogId);
    if (!blog) {
      throw new GraphQlApiError(
        'Blog not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await blog.remove();
    return blog;
  }
}
