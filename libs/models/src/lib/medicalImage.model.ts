import {
  EModelNames,
  IMedicalImageDocument,
  IMedicalImageModel,
} from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const medicalImageSchema: Schema<IMedicalImageDocument, IMedicalImageModel> =
  new Schema<IMedicalImageDocument, IMedicalImageModel>(
    {
      date: {
        type: String,
        required: true,
        trim: true,
      },
      hospital_name: {
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
