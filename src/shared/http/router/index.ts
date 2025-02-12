import express, { Router } from 'express';
import { Request, Response } from 'express';
import productsRouter from '@modules/products/routes/ProductRoutes';
import sessionRouter from '@modules/users/routes/SessionRoutes';
import userRouter from '@modules/users/routes/UserRoutes';
import avatarRouter from '@modules/users/routes/AvatarRoutes';
import uploadConfig from '@config/uploads';
import passwordRouter from '@modules/users/routes/PasswordRoutes';
import profileRouter from '@modules/users/routes/ProfileRoutes';

const routes = Router();

routes.get('/health', (_req: Request, res: Response) => {
  res.json({ message: 'Hello dev. I am alive!' });
});

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/login', sessionRouter);
routes.use('/avatar', avatarRouter);
routes.use('/passwords', passwordRouter);
routes.use('/profiles', profileRouter);
routes.use('/files', express.static(uploadConfig.directory));

export default routes;
