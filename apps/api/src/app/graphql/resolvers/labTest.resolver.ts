import { catchReq } from '../../utils';
import { labTestController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getLabTests: catchReq(labTestController.getLabTests),
    getLabTest: catchReq(labTestController.getLabTest),
  },
  Mutation: {
    createLabTest: auth(catchReq(labTestController.createLabTest), [
      EUserRole.Admin,
      EUserRole.Doctor,
    ]),
    updateLabTest: auth(catchReq(labTestController.updateLabTest), [
      EUserRole.Admin,
      EUserRole.Doctor,
    ]),
    deleteLabTest: auth(catchReq(labTestController.deleteLabTest), [
      EUserRole.Admin,
      EUserRole.Doctor,
    ]),
  },
};
