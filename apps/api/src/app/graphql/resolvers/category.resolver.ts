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
    ]),
    updateCategory: auth(catchReq(categoryController.updateCategory), [
      EUserRole.Admin,
    ]),
    deleteCategory: auth(catchReq(categoryController.deleteCategory), [
      EUserRole.Admin,
    ]),
  },
};
