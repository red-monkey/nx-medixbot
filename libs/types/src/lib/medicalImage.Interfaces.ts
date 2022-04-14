import * as mongoose from 'mongoose';

export interface IMedicalImages {
  date: string;
  hospitalName: string;
  comment?: string;
  report?: string;
  image?: string;
  userRef: string | (() => string);
}
export interface IMedicalImageDocument
  extends mongoose.Document,
    IMedicalImages {}
