import * as mongoose from 'mongoose';
import { TClinic } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IClinicDocument
  extends mongoose.Document,
    Omit<TClinic, 'id'> {}

export interface IClinicModel extends Model<IClinicDocument> {
  paginate?: (
    filter: FilterQuery<TClinic>,
    options: IPaginateOption<unknown>
  ) => Promise<[TClinic, unknown]>;
}
