import { Schema, model, Types } from 'mongoose';
import { EModelNames, TPatientDocument, TPatientModel } from '@medixbot/types';

const patientSchema: Schema<TPatientDocument> = new Schema<TPatientDocument>({
  userRef: {
    type: Types.ObjectId,
    ref: EModelNames.USER,
    required: true,
    unique: true,
  },
});

patientSchema.statics['isPatientExist'] = async function (userRef: string) {
  return await this.findOne({ userRef });
};

export const patientModel = model<TPatientDocument, TPatientModel>(
  EModelNames.PATIENT_FIELD,
  patientSchema
);
