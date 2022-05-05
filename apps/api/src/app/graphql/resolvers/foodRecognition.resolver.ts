import { catchReq } from '../../utils';
import { foodRecognitionController } from '../../controllers';

export default {
  Query: {
    predictImage: catchReq(foodRecognitionController.predictImage),
  },
};
