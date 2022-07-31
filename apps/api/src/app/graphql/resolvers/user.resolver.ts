import { catchReq } from '../../utils';
import { auth } from '../../middlewares';
import { userController } from '../../controllers';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    me: auth(catchReq(userController.getMe), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
    user: auth(catchReq(userController.getUser), [EUserRole.Admin]),
    users: auth(catchReq(userController.getUsers), [EUserRole.Patient]),
    doctor: auth(catchReq(userController.getDoctor), [EUserRole.Patient]),
    doctors: auth(catchReq(userController.getDoctors), [
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    patient: auth(catchReq(userController.getPatient), [EUserRole.Doctor]),
  },
  Mutation: {
    createUser: auth(catchReq(userController.createUser), [EUserRole.Admin]),
    updateAccount: auth(catchReq(userController.updateUser), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    updateDoctorInfo: auth(catchReq(userController.updateDoctor), [
      EUserRole.Admin,
    ]),
    deleteUser: auth(catchReq(userController.deleteUser), [EUserRole.Admin]),
  },
};
