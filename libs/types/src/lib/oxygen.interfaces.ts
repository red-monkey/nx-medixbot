import * as mongoose from 'mongoose';
import { TOxygenSaturationLevel } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IOxygenDocument
  extends mongoose.Document,
    Omit<TOxygenSaturationLevel, 'id'> {}

export interface IOxygenModel extends Model<IOxygenDocument> {
  paginate?: (
    filter: FilterQuery<TOxygenSaturationLevel>,
    options: IPaginateOption<unknown>
  ) => Promise<[TOxygenSaturationLevel, unknown]>;
}
