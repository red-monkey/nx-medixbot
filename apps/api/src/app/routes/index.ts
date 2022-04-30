import * as express from 'express';
const routes = express.Router();

import authRoute from './auth.route';
import imagesRoute from './images.route';

routes.use('/auth', authRoute);
routes.use('/images', imagesRoute);

export default routes;
