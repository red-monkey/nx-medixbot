import {
  EAppointmentStatus,
  EModelNames,
  IAppointment,
  IAppointmentDocument,
  IPaginateOption,
} from '@medixbot/types';
import { Schema, model, Model, Types, FilterQuery } from 'mongoose';
import { paginate, toJSON } from './plugins';

const ObjectId = Types.ObjectId;

const modelSchema: Schema<IAppointmentDocument> = new Schema(
  {
    dateTime: {
      type: String,
      required: true,
    },
    conditions: {
      type: String,
      trim: true,
    },
    symptoms: {
      type: [String],
      trim: true,
    },
    patientRef: {
      type: ObjectId,
      ref: EModelNames.USER,
      require: true,
    },
    doctorRef: {
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

interface IAppointmentModel extends Model<IAppointmentDocument> {
  paginate?: (
    filter: FilterQuery<IAppointment>,
    options: IPaginateOption<unknown>
  ) => Promise<[IAppointmentDocument, unknown]>;
}

// add plugin that converts mongoose to json
modelSchema.plugin(toJSON);
modelSchema.plugin(paginate);

export const AppointmentModel = model<IAppointmentDocument, IAppointmentModel>(
  EModelNames.APPOINTMENT,
  modelSchema
);
