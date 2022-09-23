import { EModelNames, IOxygenDocument, IOxygenModel } from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const modelSchema: Schema<IOxygenDocument> = new Schema(
  {
    level: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },
    patient: {
      type: Types.ObjectId,
      required: true,
      ref: EModelNames.USER,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
modelSchema.plugin(toJSON);
modelSchema.plugin(paginate);

export const OxygenModel = model<IOxygenDocument, IOxygenModel>(
  EModelNames.OXYGEN,
  modelSchema
);
