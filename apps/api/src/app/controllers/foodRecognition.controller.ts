import * as fs from 'fs';
import { IContext } from '../types';

async function predictImage(input: { image: unknown }, ctx: IContext) {
  const imageAsBase64 = fs.readFileSync('./your-image.png', 'base64');
  console.log(input, imageAsBase64, ctx);

  return {};
}

export default {
  predictImage,
};
