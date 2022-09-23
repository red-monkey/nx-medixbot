import { EModelNames, IGlucoseDocument, IGlucoseModel } from '@medixbot/types';
import { Schema, model, Types } from 'mongoose';
import { paginate, toJSON } from './plugins';

const modelSchema: Schema<IGlucoseDocument> = new Schema(
  {
    value: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
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

//static method to get min and max value
modelSchema.statics['getMinAndMaxValues'] = async function () {
  this.aggregate([
    {
      $group: {
        _id: '$patient',
        max_val: { $max: '$value' },
        min_val: { $min: '$value' },
      },
    },
  ]);
};

//call get max and min after save
modelSchema.post('save', function () {
  console.log('calculating max and min values');
  modelSchema.statics['getMinAndMaxValues'] = async function () {
    this.aggregate([
      {
        $group: {
          _id: '$patient',
          max_val: { $max: '$value' },
          min_val: { $min: '$value' },
        },
      },
    ]);
  };
});

//call get max and min defore remove
modelSchema.pre('remove', function () {
  modelSchema.statics['getMinAndMaxValues'] = async function () {
    this.aggregate([
      {
        $group: {
          _id: '$patient',
          max_val: { $max: '$value' },
          min_val: { $min: '$value' },
        },
      },
    ]);
  };
});

export const GlucoseModel = model<IGlucoseDocument, IGlucoseModel>(
  EModelNames.GLUCOSE,
  modelSchema
);
