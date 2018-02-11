import examplesRouter from './api/controllers/examples/router';
import temperaturaRouter from './api/controllers/sensors/temperaturarouter'; 

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/temperatura', temperaturaRouter);
}
