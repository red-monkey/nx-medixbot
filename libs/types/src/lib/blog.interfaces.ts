import * as mongoose from 'mongoose';
import { TBlog } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IBlogDocument extends mongoose.Document, Omit<TBlog, 'id'> {}

export interface IBlogModel extends Model<IBlogDocument> {
  paginate?: (
    filter: FilterQuery<TBlog>,
    options: IPaginateOption<unknown>
  ) => Promise<[TBlog, unknown]>;
}
