import { Request, Response } from 'express';
import { IUserDocument } from '@medixbot/types';
import { DataSources } from '../datasources';

export interface IContext {
  req: Request;
  res: Response;
  user?: IUserDocument;
  dataSources?: DataSources;
}
