import { ITokenDocument } from '@medixbot/types';
import { EModelNames, ETokenType } from '@medixbot/types/enum';
import { Schema, SchemaTypes, model } from 'mongoose';
import { toJSON } from './plugins';

const tokenSchema: Schema<ITokenDocument> = new Schema(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: EModelNames.USER,
      required: true,
    },
    type: {
      type: String,
      enum: [
        ETokenType.REFRESH,
        ETokenType.RESET_PASSWORD,
        ETokenType.VERIFY_EMAIL,
      ],
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

tokenSchema.plugin(toJSON);

export const TokenModel = model<ITokenDocument>(EModelNames.TOKEN, tokenSchema);
