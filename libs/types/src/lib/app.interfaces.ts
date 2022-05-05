import * as jwt from 'jsonwebtoken';
import { ETokenType } from './enum';

export interface IPaginateOption<T> {
  sortBy?: string;
  populate?: IPaginatePopulate<T>[];
  limit?: number;
  page?: number;
}

interface IPaginatePopulate<T> {
  path: string;
  match?: T;
}

export interface ITokenPayload extends jwt.JwtPayload {
  type?: ETokenType;
}

export interface IDataResult<T> {
  results: T[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}
