import * as mongoose from 'mongoose';
import { Model, FilterQuery } from 'mongoose';
import { IPaginateOption } from './app.interfaces';
import { EAppointmentStatus } from './generated';

export interface IAppointment {
  dateTime: string;
  conditions: string;
  symptoms: string[];
  patientRef: string | (() => string);
  doctorRef: string | (() => string);
  status: EAppointmentStatus;
  patientJoinAt: string; // ISO date string
  doctorJoinAt: string;
  patientQuitAt: string;
  doctorQuitAt: string;
}

export interface IAppointmentDocument extends mongoose.Document, IAppointment {}

export interface IAppointmentModel extends Model<IAppointmentDocument> {
  paginate?: (
    filter: FilterQuery<IAppointment>,
    options: IPaginateOption<unknown>
  ) => Promise<[IAppointmentDocument, unknown]>;
}
