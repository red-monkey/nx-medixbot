import * as mongoose from 'mongoose';

export interface ILabTestDocument extends mongoose.Document {
  institutionName: string;
  processName: string;
  result?: string;
  resultNnit?: string;
  referenceValue?: string;
  report?: string;
  date?: string;
}
