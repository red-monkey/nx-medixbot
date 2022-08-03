import { catchReq } from '../../utils';
import { clinicController } from '../../controllers';

import { EUserRole } from '@medixbot/types';
import { auth } from '../../middlewares';

export default {
  Query: {
    getClinics: catchReq(clinicController.getClinics),
    getClinic: catchReq(clinicController.getClinic),
  },
  Mutation: {
    createClinic: auth(catchReq(clinicController.createClinic), [
      EUserRole.Patient,
      EUserRole.Doctor,
      EUserRole.Admin,
    ]),
    updateClinic: auth(catchReq(clinicController.updateClinic), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),

    deleteClinic: auth(catchReq(clinicController.deleteClinic), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
  },
};
