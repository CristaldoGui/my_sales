import { Router } from 'express';
import UserProfileControllers from '../controller/UserProfileControllers';
import AuthMiddleware from '@shared/middlewares/AuthMiddleware';
import { UpdateUserSchema } from '../schema/UpdateUserSchema';

const profileRouter = Router();

const userProfileControllers = new UserProfileControllers();

profileRouter.use(AuthMiddleware.execute);
profileRouter.get('/', userProfileControllers.show);
profileRouter.post(
  '/',

  UpdateUserSchema,
  userProfileControllers.update,
);

export default profileRouter;
