import { EGraphQlErrorCode } from '@medixbot/types';
import { ApolloError } from 'apollo-server-errors';

export default class GraphQlApiError extends ApolloError {
  constructor(message: string, code?: string) {
    super(message, code || EGraphQlErrorCode.INTERNAL_SERVER_ERROR);

    Object.defineProperty(this, 'name', { value: 'GraphQlApiError' });
  }
}
