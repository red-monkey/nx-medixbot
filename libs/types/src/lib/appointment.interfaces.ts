import * as mongoose from 'mongoose';
import { TAppointment } from './generated';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';

export interface IAppointmentDocument
  extends mongoose.Document,
    Omit<TAppointment, 'id'> {}

export interface IAppointmentModel extends Model<IAppointmentDocument> {
  paginate?: (
    filter: FilterQuery<TAppointment>,
    options: IPaginateOption<unknown>
  ) => Promise<[TAppointment, unknown]>;
}
