import { Router } from 'express';
import UpdateUserAvatarController from '../controller/UpdateUserAvatarControllers';
import AuthMiddleware from '@shared/middlewares/AuthMiddleware';
import multer from 'multer';
import uploadConfig from '@config/uploads';

const avatarRouter = Router();
const updateUserAvatarController = new UpdateUserAvatarController();
const upload = multer(uploadConfig);

avatarRouter.patch(
  '/',
  AuthMiddleware.execute,
  upload.single('avatar'),
  updateUserAvatarController.update,
);

export default avatarRouter;
