import productsRouter from '@modules/products/routes/ProductRoutes';
import { Router } from 'express';
import { Request, Response } from 'express';

const routes = Router();

routes.get('/health', (_req: Request, res: Response) => {
  res.json({ message: 'Hello dev. I am alive!' });
});

routes.use('/products', productsRouter);

export default routes;
