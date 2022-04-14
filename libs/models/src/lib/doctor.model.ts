import { EModelNames, IDoctorDocument, IDoctorModel } from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';

const doctorFieldSchema: Schema<IDoctorDocument, IDoctorModel> = new Schema<
  IDoctorDocument,
  IDoctorModel
>({
  userRef: {
    type: Types.ObjectId,
    ref: EModelNames.USER,
    required: true,
    unique: true,
  },
  availability: {
    type: [
      {
        day: Number,
        times: [
          {
            hour: Number,
            min: Number,
            period: String,
          },
        ],
      },
    ],
  },
  unAvailability: {
    type: [String],
  },
  clinicRef: {
    type: Types.ObjectId,
    ref: EModelNames.CLINIC,
    require: true,
  },
  domain: {
    type: String,
    trim: true,
  },
  about: {
    type: String,
    trim: true,
  },
  documents: {
    type: [
      {
        type: String,
        url: String,
      },
    ],
  },
});

doctorFieldSchema.statics['isDoctorExist'] = async function (userRef: string) {
  return !!(await this.findOne({ userRef }));
};

export const DoctorModel = model<IDoctorDocument, IDoctorModel>(
  EModelNames.DOCTOR,
  doctorFieldSchema
);
