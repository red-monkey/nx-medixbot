import {
  EModelNames,
  IMedicalImageDocument,
  IMedicalImages,
} from '@medixbot/types';
import { Schema, model, Model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const medicalImageSchema: Schema<IMedicalImageDocument, IMedicalImageModel> =
  new Schema<IMedicalImageDocument, IMedicalImageModel>(
    {
      date: {
        type: String,
        required: true,
        trim: true,
      },
      hospitalName: {
        type: String,
        required: true,
        trim: true,
      },
      comment: {
        type: String,
        required: true,
        trim: true,
      },
      report: {
        type: String,
        required: true,
        trim: true,
      },
      image: {
        type: String,
        required: true,
        trim: true,
      },
      userRef: {
        type: Types.ObjectId,
        ref: EModelNames.USER,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

interface IMedicalImageModel extends Model<IMedicalImageDocument> {
  paginate?: (
    filter: IMedicalImages,
    options: unknown
  ) => Promise<[IMedicalImageDocument, unknown]>;
}

// add plugin that converts mongoose to json
medicalImageSchema.plugin(toJSON);
medicalImageSchema.plugin(paginate);

/**
 * @typedef MedicalImage
 */
export const MedicalImageModel = model<
  IMedicalImageDocument,
  IMedicalImageModel
>(EModelNames.MEDICAL_IMAGE, medicalImageSchema);
