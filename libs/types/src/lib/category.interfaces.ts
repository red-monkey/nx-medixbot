import * as mongoose from 'mongoose';
import { TCategory } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface ICategoryDocument
  extends mongoose.Document,
    Omit<TCategory, 'id'> {}

export interface ICategoryModel extends Model<ICategoryDocument> {
  paginate?: (
    filter: FilterQuery<TCategory>,
    options: IPaginateOption<unknown>
  ) => Promise<[TCategory, unknown]>;
}
