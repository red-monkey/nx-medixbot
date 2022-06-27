import {
  EModelNames,
  ICategoryDocument,
  ICategoryModel,
} from '@medixbot/types';
import { Schema, model } from 'mongoose';
import { paginate, toJSON } from './plugins';

const modelSchema: Schema<ICategoryDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
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

export const CategoryModel = model<ICategoryDocument, ICategoryModel>(
  EModelNames.Category,
  modelSchema
);
