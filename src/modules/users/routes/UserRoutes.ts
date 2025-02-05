import { Router } from 'express';
import UserControllers from '../controller/UserControllers';

const userRouter = Router();
const userControllers = new UserControllers();

userRouter.get('/', userControllers.index);
userRouter.post('/', userControllers.create);

export default userRouter;
