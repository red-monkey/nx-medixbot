import * as mongoose from 'mongoose';

export interface IMedicationDocument {
  barcode: string;
  medicine_name: string;
  comment: string;
  dosage: string;
  period: string;
  usage_method: string;
  usage_number: string;
  box_count: string;
  image: string;
}

export interface IPrescriptionDocument extends mongoose.Document {
  date: string;
  prescription_number: string;
  prescription_type?: string;
  physician: string;
  medications: IMedicationDocument[];
}
