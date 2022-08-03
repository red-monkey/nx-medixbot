import { MongoDataSource } from 'apollo-datasource-mongodb';
import {
  IPaginateOption,
  EGraphQlErrorCode,
  IOrderDocument,
  IOrderModel,
  TOrder,
  TPaymentResult,
} from '@medixbot/types';
import { FilterQuery } from 'mongoose';
import { GraphQlApiError } from '../utils';
import { IContext } from '../types';

export class OrderDataSource extends MongoDataSource<IOrderDocument, IContext> {
  private Order: IOrderModel;

  constructor(OrderModel: IOrderModel) {
    super(OrderModel);
    this.Order = OrderModel;
  }
  async getOrder(orderId: string) {
    return await (
      await this.findOneById(orderId)
    ).populate({ path: 'user', select: '-password' });
  }

  async getOrders(
    filter: FilterQuery<IOrderDocument>,
    options: IPaginateOption<unknown>
  ) {
    options.populate = [{ path: 'user' }];
    return await this.Order.paginate(filter, options);
  }

  async createOrder(order: TOrder) {
    return await (
      await this.model.create(order)
    ).populate({ path: 'user', select: '-password' });
  }

  async updateOrder(orderId: string, data: FilterQuery<IOrderDocument>) {
    const order = await this.getOrder(orderId);
    if (!order) {
      throw new GraphQlApiError(
        'Order not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    Object.assign(order, data);
    await order.save();
    return order;
  }

  async deleteOrder(orderId: string) {
    const order = await this.getOrder(orderId);
    if (!order) {
      throw new GraphQlApiError(
        'Order not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    await order.remove();
    return order;
  }

  async getMyOrders(
    userId: string,
    filter: FilterQuery<IOrderDocument>,
    options: IPaginateOption<unknown>
  ) {
    filter = { user: userId };
    options.populate = [{ path: 'user' }];
    return await this.Order.paginate(filter, options);
  }

  async updateOrderToPaid(orderId: string, data: FilterQuery<TPaymentResult>) {
    const order = await this.getOrder(orderId);
    if (!order) {
      throw new GraphQlApiError(
        'Order not found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }

    order.isPaid = true;
    order.paidAt = Date.now().toString();
    order.paymentResult = {
      id: data.id,
      status: data.status,
      update_time: Date.now().toString(),
      email_address: data.email_address,
    };

    const updatedOrder = await order.save();
    return updatedOrder;
  }

  async updateOrderToDelivered(orderId: string) {
    const order = await this.getOrder(orderId);
    if (!order) {
      throw new GraphQlApiError(
        'Order Not Found',
        EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
      );
    }
    order.isDelivered = true;
    order.deliveredAt = Date.now().toString();
    const updatedOrder = await order.save();
    return updatedOrder;
  }
}
