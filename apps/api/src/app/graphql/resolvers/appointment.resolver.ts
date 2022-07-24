import { catchReq } from '../../utils';
import { auth } from '../../middlewares';
import { appointmentController } from '../../controllers';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    appointments: auth(catchReq(appointmentController.getAppointments), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
    appointment: auth(catchReq(appointmentController.getAppointment), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
  },
  Mutation: {
    makeAppointment: auth(catchReq(appointmentController.makeAppointment), [
      EUserRole.Patient,
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
