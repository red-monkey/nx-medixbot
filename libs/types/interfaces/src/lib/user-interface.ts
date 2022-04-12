import { EGender, EUserAccountStatus, EUserRole } from '@medixbot/types/enum';
import * as mongoose from 'mongoose';
import { IPaginateOption } from './app-interface';

export interface IUserID {
  id: string;
}
interface IFirstname {
  firstname: string;
}
interface ILastname {
  lastname: string;
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
interface IRegion {
  region: string;
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

export interface IUser
  extends IFirstname,
    ILastname,
    ITel,
    IEmail,
    ICountry,
    IRegion,
    IAddress,
    IAccountStatus,
    IUserRole,
    Partial<IGender> {
  password: string;
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
