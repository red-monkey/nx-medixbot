import * as mongoose from 'mongoose';
import { TOrder } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IOrderDocument extends mongoose.Document, Omit<TOrder, 'id'> {}

export interface IOrderModel extends Model<IOrderDocument> {
  paginate?: (
    filter: FilterQuery<TOrder>,
    options: IPaginateOption<unknown>
  ) => Promise<[TOrder, unknown]>;
}
