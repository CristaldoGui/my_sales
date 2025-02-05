import { Router } from 'express';
import UserControllers from '../controller/UserControllers';
import { createUserSchema } from '../schema/UserSchema';

const userRouter = Router();
const userControllers = new UserControllers();

userRouter.get('/', userControllers.index);
userRouter.post('/', createUserSchema, userControllers.create);

export default userRouter;
