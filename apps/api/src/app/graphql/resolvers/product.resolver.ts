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
      EUserRole.Admin,
    ]),
    updateProduct: auth(catchReq(productController.updateProduct), [
      EUserRole.Admin,
    ]),
    deleteProduct: auth(catchReq(productController.deleteProduct), [
      EUserRole.Admin,
    ]),
    createProductReview: auth(catchReq(productController.createProductReview), [
      EUserRole.Patient,
      EUserRole.Admin,
      EUserRole.Doctor,
    ]),
  },
};
