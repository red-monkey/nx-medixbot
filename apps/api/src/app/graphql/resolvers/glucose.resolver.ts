import { catchReq } from '../../utils';
import { glucoseController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getGlucoseTest: auth(catchReq(glucoseController.getGlucoseTest), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    getMyGlucoseTests: auth(catchReq(glucoseController.getMyGlucoseTests), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
  },
  Mutation: {
    createGlucoseTest: auth(catchReq(glucoseController.createGlucoseTest), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    updateGlucoseTest: auth(catchReq(glucoseController.updateGlucoseTest), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    deleteGlucoseTest: auth(catchReq(glucoseController.deleteGlucoseTest), [
      EUserRole.Admin,
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
  },
};
