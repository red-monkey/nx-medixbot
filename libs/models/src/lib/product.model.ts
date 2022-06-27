import {
  EModelNames,
  IProductDocument,
  IProductModel,
  IReviewDocument,
} from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const reviewSchema: Schema<IReviewDocument> = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: Types.ObjectId,
      ref: EModelNames.USER,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const modelSchema: Schema<IProductDocument> = new Schema(
  {
    user: {
      type: Types.ObjectId,
      required: true,
      ref: EModelNames.USER,
    },
    name: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },
    category: {
      type: Types.ObjectId,
      required: true,
      ref: EModelNames.Category,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
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

export const ProductModel = model<IProductDocument, IProductModel>(
  EModelNames.Product,
  modelSchema
);
