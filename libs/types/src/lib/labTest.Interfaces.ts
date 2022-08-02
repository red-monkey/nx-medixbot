import * as mongoose from 'mongoose';
import { TLabTest } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface ILabTestDocument
  extends mongoose.Document,
    Omit<TLabTest, 'id'> {}

export interface ILabTestModel extends Model<ILabTestDocument> {
  paginate?: (
    filter: FilterQuery<TLabTest>,
    options: IPaginateOption<unknown>
  ) => Promise<[TLabTest, unknown]>;
}
