import {FetchResult} from '@apollo/client';
import { EGender, EMembership, EUserAccountStatus, EUserRole, IRegisterUser } from '@medixbot/types';
export type TData = {
  login?: ILogin;
};

export type TDataRegister = {
  register?: IRegister;
};

export interface ILogin {
  __typename: 'UserAfterAuth';
  tokens: {__typename: 'Token'; access: IToken; refresh: IToken};
  user: IUser;
}

export interface IRegister {
  tokens: {__typename: 'Token'; access: IToken; refresh: IToken};
  user: IUser;
}

export interface IUser {
  __typename: 'User';
  id:string,
  fullName:string,
  email:string,
  tel:string,
  gender:EGender,
  userRole:EUserRole,
  accountStatus:EUserAccountStatus
  registeredWith:string,
  dateOfBirth:string,
  country:string,
  city:string,
  state:string,
  postCode:string,
  languages:[string],
  membership:EMembership,
  profileImage:string,
}

export interface IToken {
  token: string;
  expires: string;
}

export type TVariables = {
  username: string;
  password: string;
};



export type IResult = (
  username: string,
  password: string,
) => Promise<FetchResult<TData, Record<string, any>, Record<string, any>>>;


export type IResultRegister = (
  data: IRegisterUser
) => Promise<FetchResult<TDataRegister, Record<string, any>, Record<string, any>>>;


export type TokenType = 'accessToken' | 'refreshToken';
