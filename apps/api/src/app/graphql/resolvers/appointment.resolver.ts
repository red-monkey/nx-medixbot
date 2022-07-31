import { catchReq } from '../../utils';
import { appointmentController } from '../../controllers';

import { EUserRole } from '@medixbot/types';
import { auth } from '../../middlewares';

export default {
  Query: {
    getAppointments: auth(catchReq(appointmentController.getAppointments), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
    getAppointment: auth(catchReq(appointmentController.getAppointment), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
  },
  Mutation: {
    makeAppointment: auth(catchReq(appointmentController.makeAppointment), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
    updateAppointment: auth(catchReq(appointmentController.updateAppointment), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    updateAppointmentStatus: auth(
      catchReq(appointmentController.updateAppointmentStatus),
      [EUserRole.Patient, EUserRole.Doctor]
    ),
    deleteAppointment: auth(catchReq(appointmentController.deleteAppointment), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
  },
};
