import { EModelNames, ILabTestDocument, ILabTestModel } from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const modelSchema: Schema<ILabTestDocument> = new Schema(
  {
    institutionName: {
      type: String,
      required: true,
    },
    processName: {
      type: String,
      trim: true,
    },
    result: {
      type: String,
      required: true,
      trim: true,
    },
    resultUnit: {
      type: String,
      trim: true,
    },
    referenceValue: {
      type: String,
      required: true,
      trim: true,
    },
    data: {
      type: String,
      required: true,
      trim: true,
    },
    patient: {
      type: Types.ObjectId,
      required: true,
      ref: EModelNames.USER,
    },
    doctor: {
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

export const LabTestModel = model<ILabTestDocument, ILabTestModel>(
  EModelNames.LABTEST,
  modelSchema
);
