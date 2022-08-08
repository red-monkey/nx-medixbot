import { catchReq } from '../../utils';
import { categoryController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getCategories: catchReq(categoryController.getCategories),
    getCategory: catchReq(categoryController.getCategory),
  },
  Mutation: {
    createCategory: auth(catchReq(categoryController.createCategory), [
      EUserRole.Admin,
      EUserRole.Patient,
    ]),
    updateCategory: auth(catchReq(categoryController.updateCategory), [
      EUserRole.Patient,
    ]),
    deleteCategory: auth(catchReq(categoryController.deleteCategory), [
      EUserRole.Patient,
    ]),
  },
};
