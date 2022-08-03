import { EModelNames, IClinicDocument, IClinicModel } from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const modelSchema: Schema<IClinicDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    hospital: {
      type: Types.ObjectId,
      ref: EModelNames.HOSPITAL,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
modelSchema.plugin(toJSON);
modelSchema.plugin(paginate);

export const ClinicModel = model<IClinicDocument, IClinicModel>(
  EModelNames.CLINIC,
  modelSchema
);
