import { catchReq } from '../../utils';
import { blogController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getBlogs: catchReq(blogController.getBlogs),
    getBlog: catchReq(blogController.getBlog),
  },
  Mutation: {
    createBlog: auth(catchReq(blogController.createBlog), [EUserRole.Admin]),
    updateBlog: auth(catchReq(blogController.updateBlog), [EUserRole.Admin]),
    deleteBlog: auth(catchReq(blogController.deleteBlog), [EUserRole.Admin]),
  },
};
