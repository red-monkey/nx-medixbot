import { TokenModel, UserModel } from '@medixbot/models';
import { EUserAccountStatus } from '@medixbot/types';
import * as jwt from 'jsonwebtoken';
import { config } from '../configs';

const verifyToken = async (token: string, type: string) => {
  let tokenDoc;
  const payload = jwt.verify(token, config.jwt.secret);
  if (type === global.tokenTypes.ACCESS) {
    tokenDoc.user = payload.sub;
    tokenDoc.token = token;
    tokenDoc.type = type;
  } else {
    tokenDoc = await TokenModel.findOne({
      token,
      type,
      user: payload.sub,
      blacklisted: false,
    });
    if (!tokenDoc) {
      throw new Error('Token not found');
    }
  }
  if (!tokenDoc) {
    throw new Error('Token not found');
  }
  return tokenDoc;
};

const verifyEmail = async (verifyEmailToken: string) => {
  try {
    const verifyEmailTokenDoc = await verifyToken(
      verifyEmailToken,
      global.tokenTypes.VERIFY_EMAIL
    );
    const user = await UserModel.findById(verifyEmailTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await TokenModel.deleteMany({
      user: user.id,
      type: global.tokenTypes.VERIFY_EMAIL,
    });
    await UserModel.findByIdAndUpdate(user.id, {
      accountStatus: EUserAccountStatus.Opened,
    });
  } catch (error) {
    throw new Error('Email verification failed');
  }
};

export default {
  verifyEmail,
};
