import * as mongoose from 'mongoose';
import { IPaginateOption } from './app.interfaces';
import { TDoctor, TPaginatedUsers, TPatient, TUser } from './generated';
export interface IUserDocument extends mongoose.Document, Omit<TUser, 'id'> {
  password: string;
  isPasswordMatch?: (password: string) => Promise<boolean>;
}

export interface IUserModel extends mongoose.Model<IUserDocument> {
  // statics
  isEmailTaken?: (email: string, excludeUserId?: string) => Promise<boolean>;
  isTelTaken?: (tel: string, excludeUserId?: string) => Promise<boolean>;
  paginate?: (
    filter: mongoose.FilterQuery<IUserDocument>,
    options: IPaginateOption<unknown>
  ) => Promise<TPaginatedUsers>;
}
export interface TDoctorDocument
  extends mongoose.Document,
    Omit<TDoctor, 'info'> {
  userRef: string | (() => string);
}
export interface TDoctorModel extends mongoose.Model<TDoctorDocument> {
  // statics
  isDoctorExist?: (userRef: string) => Promise<boolean>;
}
export interface TPatientDocument
  extends mongoose.Document,
    Omit<TPatient, 'info'> {
  userRef: string | (() => string);
}
export interface TPatientModel extends mongoose.Model<TPatientDocument> {
  // statics
  isPatientExist?: (userRef: string) => Promise<boolean>;
}
