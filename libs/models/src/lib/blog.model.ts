import { EModelNames, IBlogModel, IBlogDocument } from '@medixbot/types';
import { Schema, model } from 'mongoose';
import { paginate, toJSON } from './plugins';

const modelSchema: Schema<IBlogDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
      default: 'image.jpeg',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
modelSchema.plugin(toJSON);
modelSchema.plugin(paginate);

/**
 * Check if name is taken
 */
modelSchema.statics['isNameTaken'] = async function (
  name: string,
  excludeUserId: string
) {
  const blog = await this.findOne({ name, _id: { $ne: excludeUserId } });
  return !!blog;
};

export const BlogModel = model<IBlogDocument, IBlogModel>(
  EModelNames.BLOG,
  modelSchema
);
