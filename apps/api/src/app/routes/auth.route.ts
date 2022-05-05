import * as express from 'express';
import { authController } from '../controllers';

const route = express.Router();

route.get('/verify-email/:token', authController.verifyEmail);

export default route;
