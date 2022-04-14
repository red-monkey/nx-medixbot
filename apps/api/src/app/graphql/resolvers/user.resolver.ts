import { catchReq } from '../../utils';
import { userValidation } from '../../validations';
import { auth } from '../../middlewares';
import { userController } from '../../controllers';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    me: auth(catchReq(userValidation.getMe, userController.getMe), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
    user: auth(catchReq(userValidation.getUser, userController.getUser), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
    users: auth(catchReq(userValidation.getUsers, userController.getUsers), [
      EUserRole.Admin,
    ]),
  },
  Mutation: {
    createUser: auth(
      catchReq(userValidation.createUser, userController.createUser),
      [EUserRole.Admin]
    ),
    updateUser: auth(
      catchReq(userValidation.updateUser, userController.updateUser),
      [EUserRole.Admin, EUserRole.Patient]
    ),
    deleteUser: auth(
      catchReq(userValidation.deleteUser, userController.deleteUser),
      [EUserRole.Admin]
    ),
  },
};
