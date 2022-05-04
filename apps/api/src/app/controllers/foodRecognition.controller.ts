import * as fs from 'fs';
import { finished } from 'stream/promises';
import { IContext } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function predictImage(input: { image: any }, ctx: IContext) {
  const { createReadStream, filename } = await input.image;

  const filePath = `apps/api/src/uploads/${filename}`;

  const stream = createReadStream();
  const out = fs.createWriteStream(filePath);
  stream.pipe(out);
  await finished(out);

  const imageAsBase64 = fs.readFileSync(filePath, 'base64');

  fs.unlink(filePath, (err) => {
    console.log(err ? err : 'file deleted');
  });
  console.log(imageAsBase64.substring(0, 100));

  /**
   * Send to image to the api for prediction
   */

  return {
    accuracy: 95.8,
    foodName: 'Smit',
    nutrients: {
      protein: 20,
      fat: 50,
    },
  };
}

export default {
  predictImage,
};
