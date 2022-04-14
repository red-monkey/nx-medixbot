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
      EUserRole.Admin,
    ]),
    users: auth(catchReq(userValidation.getUsers, userController.getUsers), [
      EUserRole.Admin,
    ]),
    doctor: auth(catchReq(userValidation.getDoctor, userController.getDoctor), [
      EUserRole.Patient,
    ]),
    doctors: auth(
      catchReq(userValidation.getDoctors, userController.getDoctors),
      [EUserRole.Patient, EUserRole.Doctor]
    ),
    patient: auth(
      catchReq(userValidation.getPatient, userController.getPatient),
      [EUserRole.Doctor]
    ),
  },
  Mutation: {
    createUser: auth(
      catchReq(userValidation.createUser, userController.createUser),
      [EUserRole.Admin]
    ),
    updateAccount: auth(
      catchReq(userValidation.updateUser, userController.updateUser),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
    updateDoctorInfo: auth(
      catchReq(userValidation.updateDoctor, userController.updateDoctor),
      [EUserRole.Admin]
    ),
    deleteUser: auth(
      catchReq(userValidation.deleteUser, userController.deleteUser),
      [EUserRole.Admin]
    ),
  },
};
