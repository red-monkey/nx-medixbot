import { catchReq } from '../../utils';
import { authController } from '../../controllers';
import { auth } from '../../middlewares';

export default {
  Query: {},
  Mutation: {
    register: catchReq(authController.register),
    login: catchReq(authController.login),
    logout: auth(catchReq(authController.logout)),
    refreshTokens: catchReq(authController.refreshTokens),
    forgotPassword: catchReq(authController.forgotPassword),
    resetPassword: catchReq(authController.resetPassword),
    sendVerificationEmail: auth(
      catchReq(authController.sendVerificationEmail),
      []
    ),
  },
};
