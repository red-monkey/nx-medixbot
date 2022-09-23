import * as mongoose from 'mongoose';
import { TSleep } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface ISleepDocument extends mongoose.Document, Omit<TSleep, 'id'> {}

export interface ISleepModel extends Model<ISleepDocument> {
  paginate?: (
    filter: FilterQuery<TSleep>,
    options: IPaginateOption<unknown>
  ) => Promise<[TSleep, unknown]>;
}
