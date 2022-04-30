import { TokenModel, UserModel } from '@medixbot/models';
import { ETokenType, EUserAccountStatus } from '@medixbot/types';
import * as jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import { config } from '../configs';

const verifyToken = async (token: string, type: ETokenType) => {
  let tokenDoc;
  let payload;
  try {
    payload = jwt.verify(token, config.jwt.secret);
  } catch (error) {
    throw new Error(error.message);
  }

  if (type === ETokenType.ACCESS) {
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
      ETokenType.VERIFY_EMAIL
    );
    const user = await UserModel.findById(verifyEmailTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await TokenModel.deleteMany({
      user: user.id,
      type: ETokenType.VERIFY_EMAIL,
    });
    await UserModel.findByIdAndUpdate(user.id, {
      accountStatus: EUserAccountStatus.Opened,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const verifyGoogleToken = async (token: string) => {
  const auth = new OAuth2Client(config.google.clientID);
  const ticket = await auth.verifyIdToken({
    idToken: token,
    audience: config.google.clientID,
  });
  return ticket.getPayload().email;
};

export default {
  verifyEmail,
  verifyGoogleToken,
};
