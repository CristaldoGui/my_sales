import { Router } from 'express';
import ResetPasswordController from '../controller/ResetPasswordControllers';
import SendForgotPasswordEmailController from '../controller/SendForgotPasswordEmailControllers';
import { resetPasswordSchema, sendForgotPasswordEmailSchema } from '../schema/PasswordSchema';

const passwordRouter = Router();
const resetPasswordController = new ResetPasswordController();
const sendForgotPasswordEmailController = new SendForgotPasswordEmailController();

passwordRouter.post('/forgot', sendForgotPasswordEmailSchema, sendForgotPasswordEmailController.create);
passwordRouter.post('/reset',resetPasswordSchema, resetPasswordController.create);

export default passwordRouter;
