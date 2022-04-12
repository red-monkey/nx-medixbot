import { Request, Response } from 'express';
import { IUserDocument } from '@medixbot/types';
import { TokenDataSource, UserDataSource } from '../datasources';

export interface IContext {
  req: Request;
  res: Response;
  user?: IUserDocument;
  dataSources?: {
    users: UserDataSource;
    tokens: TokenDataSource;
  };
}
