import * as mongoose from 'mongoose';
import { THospital } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IHospitalDocument
  extends mongoose.Document,
    Omit<THospital, 'id'> {}

export interface IHospitalModel extends Model<IHospitalDocument> {
  paginate?: (
    filter: FilterQuery<THospital>,
    options: IPaginateOption<unknown>
  ) => Promise<[THospital, unknown]>;
}
