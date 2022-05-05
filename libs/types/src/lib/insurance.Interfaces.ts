import * as mongoose from 'mongoose';

export interface IInsuranceDocument extends mongoose.Document {
  name: string;
  surname: string;
  companyEmail?: string;
  companySize?: string;
}
