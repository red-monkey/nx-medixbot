import * as mongoose from 'mongoose';

export interface IConditionDocument extends mongoose.Document {
  name: string;
  description: string;
}
