import { EGender, EUserAccountStatus, EUserRole } from '@medixbot/types/enum';
import * as mongoose from 'mongoose';
import { IPaginateOption } from './app-interface';

export interface IUserID {
  id: string;
}
interface IName {
  name: string;
}
interface ISurname {
  surname: string;
}
interface ITel {
  tel: string;
}
interface IEmail {
  email: string;
}
interface ICountry {
  country: string;
}
interface ICity {
  city: string;
}
interface IAddress {
  address: string;
}
interface IAccountStatus {
  accountStatus: EUserAccountStatus;
}
interface IUserRole {
  userRole: EUserRole;
}
interface IGender {
  gender: EGender;
}
interface ILanguages {
  languages: string[];
}
interface ICountry {
  languages: string[];
}
interface ILanguages {
  languages: string[];
}
interface ILanguages {
  languages: string[];
}

export interface IUser
  extends IName,
    ISurname,
    ITel,
    IEmail,
    ICountry,
    ICity,
    IAddress,
    IAccountStatus,
    IUserRole,
    ILanguages,
    Partial<IGender> {
  password: string;
  registeredWith: string;
  dateOfBirth: Date;
}

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

export interface IUserDocument extends mongoose.Document, IUser {
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
