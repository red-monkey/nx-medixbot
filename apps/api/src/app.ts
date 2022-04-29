import * as express from 'express';
import { Express } from 'express';
import * as cors from 'cors';
import helmet from 'helmet';
import * as xss from 'xss-clean';
import * as mongoSanitize from 'express-mongo-sanitize';
import { graphqlUploadExpress } from 'graphql-upload';
import * as compression from 'compression';
import rateLimit from 'express-rate-limit';
import { ENodeEnv } from '@medixbot/types';
import { config } from './app/configs';
import apolloServer from './app/graphql';

const setupExpress = async (): Promise<Express> => {
  await apolloServer.start();
  const app = express();

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });

  app.use(limiter);

  // Security HTTP headers
  if (config.appMode === ENodeEnv.PROD) {
    app.use(helmet());
  }

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  // sanitize request data
  app.use(xss());
  app.use(mongoSanitize());

  // gzip compression
  app.use(compression());

  app.use(cors());

  app.use(graphqlUploadExpress());

  // Apollo Graphql
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  return app;
};

export default setupExpress;
