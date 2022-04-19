import {FetchResult} from '@apollo/client';
export type TData = {
  loginWithEmail?: ILoginWithEmail;
  loginWithTel?: ILoginWithTel;
};

export interface ILoginWithEmail {
  __typename: 'UserAfterAuth';
  tokens: {__typename: 'Token'; access: IToken; refresh: IToken};
  user: IUser;
}
export interface ILoginWithTel {
  __typename: 'UserAfterAuth';
  tokens: {__typename: 'Token'; access: IToken; refresh: IToken};
  user: IUser;
}

export interface IUser {
  __typename: 'User';
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  gender: string;
  birthdate: string;
  languages: [string];
  country: string;
  city: string;
  address: string;
  role: string;
  isEmailVerified: boolean;
}

export interface IToken {
  token: string;
  expires: string;
}

export type TVariables = {
  tel?: string;
  email?: string;
  password: string;
};

export type IResult = (
  password: string,
  email?: string | undefined,
  phone?: string | undefined,
) => Promise<FetchResult<TData, Record<string, any>, Record<string, any>>>;

export type TokenType = 'accessToken' | 'refreshToken';
