import * as mongoose from 'mongoose';
export interface IHospitalDocument extends mongoose.Document {
  name: string;
  tracking_number?: string;
  country: string;
  city: string;
  district: string;
  clinics?: string[];
  location: string;
  creator: string;
}
