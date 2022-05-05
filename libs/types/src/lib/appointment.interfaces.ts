import * as mongoose from 'mongoose';
import { EAppointmentStatus } from '..';

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
