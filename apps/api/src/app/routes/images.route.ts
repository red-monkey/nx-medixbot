import { EAWSS3BucketName } from '@medixbot/types';
import * as express from 'express';
import { Request, Response } from 'express';
import { awsService } from '../services';

const route = express.Router();

route.get('/:key', (req: Request, res: Response) => {
  const key = req.params.key;
  const s3 = new awsService.AWSS3();
  const fileStream = s3.getObject(key, EAWSS3BucketName.PROFILE_IMAGES);

  fileStream.pipe(res);
});

export default route;
