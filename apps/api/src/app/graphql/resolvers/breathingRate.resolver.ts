import { catchReq } from '../../utils';
import { breathingRateController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getBreathingData: auth(catchReq(breathingRateController.getBreathingData), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    getMyBreathingData: auth(
      catchReq(breathingRateController.getMyBreathingData),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
  },
  Mutation: {
    createBreathingData: auth(
      catchReq(breathingRateController.createBreathingData),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
    updateBreathingData: auth(
      catchReq(breathingRateController.updateBreathingData),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
    deleteBreathingData: auth(
      catchReq(breathingRateController.deleteBreathingData),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
  },
};
