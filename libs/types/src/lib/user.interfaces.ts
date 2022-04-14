import * as mongoose from 'mongoose';
import { IPaginateOption } from './app.interfaces';
import { TUser } from './generated';

export interface IAvailability {
  day: number;
  times: {
    hour: number;
    min: number;
    period: 'AM' | 'PM';
  }[];
}

export interface IDoctorFields {
  userRef: string | (() => string);
  availability: IAvailability[];
  unAvailability: string[]; // iso Date format
  clinicRef: string | (() => string);
  domain: string;
  about: string;
  documents: {
    type: string;
    url: string;
  }[];
}

export interface IPatientFields {
  userRef: string | (() => string);
  favoriteDoctors: IAvailability[];
}

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
  ) => Promise<[IUserDocument, unknown]>;
}

export interface IDoctorDocument extends mongoose.Document, IDoctorFields {}
export interface IDoctorModel extends mongoose.Model<IDoctorDocument> {
  // statics
  isDoctorExist?: (userRef: string) => Promise<boolean>;
}
export interface IPatientDocument extends mongoose.Document, IPatientFields {}
export interface IPatientModel extends mongoose.Model<IPatientDocument> {
  // statics
  isPatientExist?: (userRef: string) => Promise<boolean>;
}
