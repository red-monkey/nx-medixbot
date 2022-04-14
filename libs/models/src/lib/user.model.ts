import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { toJSON, paginate } from './plugins';
import {
  IUserDocument,
  IUserModel,
  EGender,
  EUserRole,
  EUserAccountStatus,
  EModelNames,
} from '@medixbot/types';

const userSchema: Schema<IUserDocument> = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    surname: {
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
      default: EUserRole.Patient,
    },
    accountStatus: {
      type: String,
      enum: EUserAccountStatus,
      default: EUserAccountStatus.Unverified,
    },
    registeredWith: {
      type: String,
    },
    languages: {
      type: [String],
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: String,
      trim: true,
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
 * Check if tel is taken
 */
userSchema.statics['isTelTaken'] = async function (
  tel: string,
  excludeUserId: string
) {
  const user = await this.findOne({ tel, _id: { $ne: excludeUserId } });
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
