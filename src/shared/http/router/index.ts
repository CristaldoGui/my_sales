import { Router } from 'express';
import { Request, Response } from 'express';

import productsRouter from '@modules/products/routes/ProductRoutes';
import sessionRouter from '@modules/users/routes/SessionRoutes';
import userRouter from '@modules/users/routes/UserRoutes';

const routes = Router();

routes.get('/health', (_req: Request, res: Response) => {
  res.json({ message: 'Hello dev. I am alive!' });
});

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/login', sessionRouter);

export default routes;
