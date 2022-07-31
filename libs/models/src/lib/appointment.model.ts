import {
  EAppointmentStatus,
  EModelNames,
  IAppointmentDocument,
  IAppointmentModel,
} from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const ObjectId = Types.ObjectId;

const modelSchema: Schema<IAppointmentDocument> = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    district: {
      type: String,
      trim: true,
    },
    hospital: {
      type: String,
      trim: true,
    },
    clinic: {
      type: String,
      trim: true,
    },
    conditions: {
      type: String,
      trim: true,
    },
    symptoms: {
      type: [String],
      trim: true,
    },
    patient: {
      type: ObjectId,
      ref: EModelNames.USER,
      require: true,
    },
    doctor: {
      type: ObjectId,
      ref: EModelNames.USER,
      require: true,
    },
    status: {
      type: String,
      enum: EAppointmentStatus,
      default: EAppointmentStatus.Pending,
    },
    doctorJoinAt: String,
    patientJoinAt: String,
    doctorQuitAt: String,
    patientQuitAt: String,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
modelSchema.plugin(toJSON);
modelSchema.plugin(paginate);

export const AppointmentModel = model<IAppointmentDocument, IAppointmentModel>(
  EModelNames.APPOINTMENT,
  modelSchema
);
