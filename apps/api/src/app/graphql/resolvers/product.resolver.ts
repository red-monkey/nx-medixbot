import { catchReq } from '../../utils';
import { productController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getProducts: catchReq(productController.getProducts),
    getProduct: catchReq(productController.getProduct),
    getTopProducts: catchReq(productController.getTopProducts),
  },
  Mutation: {
    createProduct: auth(catchReq(productController.createProduct), [
      EUserRole.Patient,
      EUserRole.Patient,
    ]),
    updateProduct: auth(catchReq(productController.updateProduct), [
      EUserRole.Patient,
      EUserRole.Patient,
    ]),
    deleteProduct: auth(catchReq(productController.deleteProduct), [
      EUserRole.Patient,
      EUserRole.Patient,
    ]),
    createProductReview: auth(catchReq(productController.createProductReview), [
      EUserRole.Patient,
      EUserRole.Admin,
      EUserRole.Doctor,
    ]),
  },
};
