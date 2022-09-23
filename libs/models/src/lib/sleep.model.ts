import { EModelNames, ISleepDocument, ISleepModel } from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const modelSchema: Schema<ISleepDocument> = new Schema(
  {
    position: {
      type: String,
      required: true,
    },
    Duration: {
      type: String,
      trim: true,
    },
    date: {
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

export const SleepModel = model<ISleepDocument, ISleepModel>(
  EModelNames.SLEEP,
  modelSchema
);
