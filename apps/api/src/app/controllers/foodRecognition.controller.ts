import * as fs from 'fs';
import axios from 'axios';
//import { finished } from 'stream/promises';
import { IContext } from '../types';
import { GraphQlApiError } from '../utils';
import { EGraphQlErrorCode } from '@medixbot/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function predictImage(input: { image: any }, ctx: IContext) {
  const { createReadStream, filename, mimetype } = await input.image;

  ctx.user;

  const filePath = `${filename}`;

  const stream = createReadStream();
  const out = fs.createWriteStream(filePath);
  stream.pipe(out);
  //await finished(out);

  const base64 = fs.readFileSync(filePath, 'base64');

  const imageAsBase64 = `data:${mimetype};base64,${base64}`;

  fs.unlink(filePath, (err) => {
    console.log(err ? err : 'file deleted');
  });

  /**
   * Send to image to the api for prediction
   */

  const data = JSON.stringify({ base64_image: imageAsBase64 });
  const config = {
    method: 'get',
    url: 'https://medixbot-food-classifier.herokuapp.com/api/predict',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  try {
    const result = await axios(config);

    return {
      accuracy: result.data?.result?.accuracy,
      foodName: result.data?.result?.food_name,
      nutrients: {
        protein: result.data?.result?.protein,
        fat: result.data?.result?.fat,
        carb: result.data?.result['carb '],
        referenceWeight: result.data?.result?.reference_weight,
      },
    };
  } catch (error) {
    throw new GraphQlApiError(
      'An error occurred on the food prediction api',
      EGraphQlErrorCode.INTERNAL_SERVER_ERROR
    );
  }
}

export default {
  predictImage,
};
