import {
  EGraphQlErrorCode,
  ICreateOrder,
  IPaymentResult,
  IUpdateOrder,
  TUser,
} from '@medixbot/types';
import { IContext } from '../types';
import { GraphQlApiError, pick } from '../utils';

async function createOrder(
  input: { data: ICreateOrder & { user: TUser } },
  ctx: IContext
) {
  const createData = input.data;

  //set order user
  createData.user = ctx.user;

  //create order

  //const order = await ctx.dataSources.orders.createOrder(createData);

  // return order;
}

interface IGetOrdersArgs {
  sortBy: string;
  limit: number;
  page: number;
}
async function getOrders(data: IGetOrdersArgs, ctx: IContext) {
  const filter = {};
  const options = pick(data, ['sortBy', 'limit', 'page']);
  const result = await ctx.dataSources.orders.getOrders(filter, options);
  return result;
}

async function getOrder(data: { orderId: string }, ctx: IContext) {
  const order = await ctx.dataSources.orders.getOrder(data.orderId);
  if (!order) {
    throw new GraphQlApiError(
      'Order not found',
      EGraphQlErrorCode.PERSISTED_QUERY_NOT_FOUND
    );
  }
  return order;
}

async function updateOrder(
  data: { orderId: string; data: IUpdateOrder },
  ctx: IContext
) {
  return await ctx.dataSources.orders.updateOrder(data.orderId, data.data);
}

async function deleteOrder(data: { orderId: string }, ctx: IContext) {
  await ctx.dataSources.orders.deleteOrder(data.orderId);
  return 'Deleted';
}

async function getMyOrders(ctx: IContext) {
  const userId = ctx.user.id.toString();
  const result = await ctx.dataSources.orders.getMyOrders(userId);
  return result;
}

async function updateOrderToPaid(
  data: { orderId: string; data: IPaymentResult },
  ctx: IContext
) {
  return await ctx.dataSources.orders.updateOrderToPaid(
    data.orderId,
    data.data
  );
}

async function updateOrderToDelivered(
  data: { orderId: string },
  ctx: IContext
) {
  return await ctx.dataSources.orders.updateOrderToDelivered(data.orderId);
}

export default {
  getOrders,
  getOrder,
  getMyOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
};
