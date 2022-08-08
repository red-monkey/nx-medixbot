import {
  EModelNames,
  IHospitalDocument,
  IHospitalModel,
} from '@medixbot/types';
import { Schema, model } from 'mongoose';
import { paginate, toJSON } from './plugins';

const modelSchema: Schema<IHospitalDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tracking_number: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    district: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
modelSchema.plugin(toJSON);
modelSchema.plugin(paginate);

export const HospitalModel = model<IHospitalDocument, IHospitalModel>(
  EModelNames.HOSPITAL,
  modelSchema
);
