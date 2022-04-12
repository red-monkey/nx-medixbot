import { ETokenType } from '@medixbot/types/enum';
import * as mongoose from 'mongoose';

export interface ITokenDocument extends mongoose.Document {
  token?: string;
  user?: string | (() => string);
  type?: ETokenType;
  expires?: Date;
}
