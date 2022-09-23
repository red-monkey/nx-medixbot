import * as mongoose from 'mongoose';
import { TGlucose } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IGlucoseDocument
  extends mongoose.Document,
    Omit<TGlucose, 'id'> {}

export interface IGlucoseModel extends Model<IGlucoseDocument> {
  paginate?: (
    filter: FilterQuery<TGlucose>,
    options: IPaginateOption<unknown>
  ) => Promise<[TGlucose, unknown]>;
}
