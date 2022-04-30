import * as mongoose from 'mongoose';

export interface IClinicDocument extends mongoose.Document {
  name: string;
  description: string;
  hospital: string;
  creator: string;
}
