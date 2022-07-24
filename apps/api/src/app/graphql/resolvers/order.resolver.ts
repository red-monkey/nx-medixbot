import { catchReq } from '../../utils';
import { orderController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getOrders: catchReq(orderController.getOrders),
    getOrder: catchReq(orderController.getOrder),
    getMyOrders: catchReq(orderController.getMyOrders),
  },
  Mutation: {
    createOrder: auth(catchReq(orderController.createOrder), [
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    updateOrder: auth(catchReq(orderController.updateOrder), [
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    deleteProduct: auth(catchReq(orderController.deleteOrder), [
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    updateOrderToPaid: auth(catchReq(orderController.updateOrderToPaid), [
      EUserRole.Patient,
      EUserRole.Admin,
      EUserRole.Doctor,
    ]),
    updateOrderToDelivered: auth(
      catchReq(orderController.updateOrderToDelivered),
      [EUserRole.Patient, EUserRole.Admin]
    ),
  },
};
