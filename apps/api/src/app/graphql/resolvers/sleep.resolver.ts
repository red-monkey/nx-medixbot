import { catchReq } from '../../utils';
import { sleepController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getSleepData: auth(catchReq(sleepController.getSleepData), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    getMySleepsData: auth(catchReq(sleepController.getMySleepsData), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
  },
  Mutation: {
    createSleepData: auth(catchReq(sleepController.createSleepData), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    updateSleepData: auth(catchReq(sleepController.updateSleepData), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    deleteSleepData: auth(catchReq(sleepController.deleteSleepData), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
  },
};
