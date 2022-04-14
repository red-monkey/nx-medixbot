import * as mongoose from 'mongoose';
import setupExpress from './app';
import { config, logger } from './app/configs';
import { authController } from './app/controllers';

setupExpress()
  .then((app) => {
    app.get('/', (req, res) => {
      res.send({ message: 'Welcome to medixbot api!' });
    });

    app.get('/rest/auth/verify-email/:token', authController.verifyEmail);

    const port = config.port;
    const server = app.listen(port, () => {
      mongoose.connect(config.mongoose.url).then(async () => {
        logger.info(
          `🚀 Server listening to at http://localhost:${config.port}/graphql`
        );
      });
    });

    server.on('error', logger.error);
  })
  .catch((error) => {
    logger.error(error);
  });
