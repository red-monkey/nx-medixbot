import { catchReq } from '../../utils';
import { oxygenController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getOxygenSaturationLevel: auth(
      catchReq(oxygenController.getOxygenSaturationLevel),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
    getMyOxygenSaturationLevels: auth(
      catchReq(oxygenController.getMyOxygenSaturationLevels),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
  },
  Mutation: {
    createOxygenSaturationLevel: auth(
      catchReq(oxygenController.createOxygenSaturationLevel),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
    updateOxygenSaturationLevel: auth(
      catchReq(oxygenController.updateOxygenSaturationLevel),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
    deleteOxygenSaturationLevel: auth(
      catchReq(oxygenController.deleteOxygenSaturationLevel),
      [EUserRole.Admin, EUserRole.Patient, EUserRole.Doctor]
    ),
  },
};
