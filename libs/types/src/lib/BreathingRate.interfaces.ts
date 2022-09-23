import * as mongoose from 'mongoose';
import { TBreathingData } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IBreathinRateDocument
  extends mongoose.Document,
    Omit<TBreathingData, 'id'> {}

export interface IBreathingRateModel extends Model<IBreathinRateDocument> {
  paginate?: (
    filter: FilterQuery<TBreathingData>,
    options: IPaginateOption<unknown>
  ) => Promise<[TBreathingData, unknown]>;
}
