import 'express-async-errors';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import router from './router';

import ErrorHandleMiddleware from '@shared/middlewares/ErrorHandleMiddleware';
import AppDataSource from '@shared/typeorm/data-source';

AppDataSource.initialize()
  .then( async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use(router);
    app.use(ErrorHandleMiddleware.handleError);

    console.log('Data Source has been initialized!');

    app.listen(3000, () => {
      console.log('Server is running on port 3000!');
    });
  })
  .catch(error => {
    console.log(error.message);
  });
