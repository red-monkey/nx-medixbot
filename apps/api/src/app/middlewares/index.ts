import { GraphQlApiError } from '../utils';
import { IContext } from '../types';
import { EGraphQlErrorCode, ETokenType, EUserRole } from '@medixbot/types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const auth =
  (
    fn: (parent: any, args: any, context: IContext) => any,
    requiredRights?: EUserRole[]
  ) =>
  async (parent: any, args: any, context: IContext) => {
    // try {
    const token = context.req?.headers?.authorization || ''; // .split(' ')[1];
    if (!token) {
      throw new GraphQlApiError(
        '⛔ Please authenticate first!',
        EGraphQlErrorCode.UNAUTHENTICATED
      );
    }
    const accessTokenDoc = await context.dataSources.tokens.verifyToken(
      token,
      ETokenType.ACCESS
    );
    if (!context.user) {
      context.user = await context.dataSources.users.getUser(
        accessTokenDoc.user.toString()
      );
    }

    if (
      !context.user ||
      (requiredRights &&
        requiredRights.length > 0 &&
        !requiredRights.includes(context.user.userRole))
    ) {
      throw new GraphQlApiError(
        "⛔ You don't have access to this ressource!",
        EGraphQlErrorCode.FORBIDDEN
      );
    }

    return fn(parent, args, context);
  };
