import { IContext } from '../types';

export default function catchReq<OutputData, Args>(
  fn: (data: Args, ctx: IContext) => OutputData
) {
  return (parent: unknown, args: Args, ctx: IContext) => {
    return fn(args, ctx);
  };
}
