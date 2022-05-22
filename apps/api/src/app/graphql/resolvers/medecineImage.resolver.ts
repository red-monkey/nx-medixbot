import { catchReq } from '../../utils';
import { medecineImageController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getMedecineImages: catchReq(medecineImageController.getMedecineImages),
    getMedecineImage: catchReq(medecineImageController.getMedecineImage),
  },
  Mutation: {
    createMedecineImage: auth(
      catchReq(medecineImageController.createMedecineImage),
      [EUserRole.Admin, EUserRole.Doctor]
    ),
    updateMedecineImage: auth(
      catchReq(medecineImageController.updateMedecineImage),
      [EUserRole.Admin, EUserRole.Doctor]
    ),
    deleteMedecineImage: auth(
      catchReq(medecineImageController.deleteMedecineImage),
      [EUserRole.Admin, EUserRole.Doctor]
    ),
  },
};
