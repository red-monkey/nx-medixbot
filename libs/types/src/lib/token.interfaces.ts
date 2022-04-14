import * as mongoose from 'mongoose';
import { ETokenType } from './enum';

export interface ITokenDocument extends mongoose.Document {
  token?: string;
  user?: string | (() => string);
  type?: ETokenType;
  expires?: Date;
}
