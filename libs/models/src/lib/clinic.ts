import { IClinicDocument, IPaginateOption } from '@medixbot/types';
import { EModelNames } from '@medixbot/types/enum';
import { Schema, model, Model, Types, FilterQuery } from 'mongoose';

import { paginate, toJSON } from './plugins';

const ObjectId = Types.ObjectId;

const clinicSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    hospital: {
      type: String,
    },
    creator: {
      type: ObjectId,
      required: true,
      ref: EModelNames.USER,
    },
  },
  {
    timestamps: true,
  }
);

interface IClinicModel extends Model<IClinicDocument> {
  // paginate?: (schema: any) => Promise<[any, any]>;
  paginate?: (
    filter: FilterQuery<IClinicDocument>,
    options: IPaginateOption<unknown>
  ) => Promise<[IClinicDocument, unknown]>;
}

// add plugin that converts mongoose to json
clinicSchema.plugin(toJSON);
clinicSchema.plugin(paginate);

export const ClinicModel = model<IClinicDocument, IClinicModel>(
  EModelNames.CLINIC,
  clinicSchema
);
