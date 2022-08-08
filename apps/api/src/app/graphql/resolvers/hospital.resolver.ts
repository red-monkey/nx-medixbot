import { catchReq } from '../../utils';
import { hospitalController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getHospitals: catchReq(hospitalController.getHospitals),
    getHospital: catchReq(hospitalController.getHospital),
  },
  Mutation: {
    createHospital: auth(catchReq(hospitalController.createHospital), [
      EUserRole.Admin,
      EUserRole.Patient,
    ]),
    updateHospital: auth(catchReq(hospitalController.updateHospital), [
      EUserRole.Admin,
      EUserRole.Patient,
    ]),
    deleteHospital: auth(catchReq(hospitalController.deleteHospital), [
      EUserRole.Admin,
      EUserRole.Patient,
    ]),
  },
};
