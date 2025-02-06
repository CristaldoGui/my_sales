import { Router } from 'express';
import UserControllers from '../controller/UserControllers';
import { createUserSchema } from '../schema/UserSchema';
import AuthMiddleware from '@shared/middlewares/AuthMiddleware';

const userRouter = Router();
const userControllers = new UserControllers();

userRouter.get('/', AuthMiddleware.execute, userControllers.index);
userRouter.post('/', createUserSchema, userControllers.create);

export default userRouter;
