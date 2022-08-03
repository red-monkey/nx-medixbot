import { catchReq } from '../../utils';
import { orderController } from '../../controllers';

import { auth } from '../../middlewares';
import { EUserRole } from '@medixbot/types';

export default {
  Query: {
    getOrders: auth(catchReq(orderController.getOrders), [
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    getOrder: auth(catchReq(orderController.getOrder), [
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
    getMyOrders: auth(catchReq(orderController.getMyOrders), [
      EUserRole.Patient,
      EUserRole.Doctor,
    ]),
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
