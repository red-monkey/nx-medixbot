import { Schema, model, Types } from 'mongoose';
import { EModelNames, IPatientDocument, IPatientModel } from '@medixbot/types';

const patientSchema: Schema<IPatientDocument> = new Schema<IPatientDocument>({
  userRef: {
    type: Types.ObjectId,
    ref: EModelNames.USER,
    required: true,
    unique: true,
  },
  favoriteDoctors: {
    type: [Types.ObjectId],
    ref: EModelNames.USER,
  },
});

patientSchema.statics['isPatientExist'] = async function (userRef: string) {
  return !!(await this.findOne({ userRef }));
};

export const patientModel = model<IPatientDocument, IPatientModel>(
  EModelNames.PATIENT_FIELD,
  patientSchema
);
