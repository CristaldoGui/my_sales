import { Router } from 'express';
import UserControllers from '../controller/UserControllers';
import { createUserSchema } from '../schema/UserSchema';
import AuthMiddleware from '@shared/middlewares/AuthMiddleware';
import ShowUserProfileController from '../controller/ShowUserProfileControllers';

const userRouter = Router();
const userControllers = new UserControllers();
const showUserProfileControllers = new ShowUserProfileController();

userRouter.get('/', AuthMiddleware.execute, userControllers.index);
userRouter.post('/', createUserSchema, userControllers.create);
userRouter.get(
  '/profile',
  AuthMiddleware.execute,
  showUserProfileControllers.get,
);

export default userRouter;
