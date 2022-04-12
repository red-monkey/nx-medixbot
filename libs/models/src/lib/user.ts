import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { toJSON, paginate } from './plugins';
import { IUserDocument, IUserModel } from '@medixbot/types';
import {
  EGender,
  EModelNames,
  EUserAccountStatus,
  EUserRole,
} from '@medixbot/types/enum';

const userSchema: Schema<IUserDocument> = new Schema(
  {
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    gender: {
      type: String,
      enum: EGender,
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      // used by the toJSON plugin
      private: true,
    },
    userRole: {
      type: String,
      enum: EUserRole,
      default: EUserRole.PATIENT,
    },
    accountStatus: {
      type: String,
      enum: EUserAccountStatus,
      default: EUserAccountStatus.UNVERIFIED,
    },
  },
  {
    timestamps: true,
  }
);

// Plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 */
userSchema.statics['isEmailTaken'] = async function (
  email: string,
  excludeUserId: string
) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 */
userSchema.methods['isPasswordMatch'] = async function (password: string) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this as IUserDocument;
  return bcrypt.compare(password, user.get('password'));
};

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (user.isModified('password')) {
    const hashedPass = await bcrypt.hash(user.get('password'), 8);
    user.set('password', hashedPass);
  }
  next();
});

export const UserModel = model<IUserDocument, IUserModel>(
  EModelNames.USER,
  userSchema
);
