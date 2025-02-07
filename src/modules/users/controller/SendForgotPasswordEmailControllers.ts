import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '../service/SendForgotPasswordEmailService';

export default class SendForgotPasswordEmailController {
  async create(req: Request, res: Response): Promise<void> {
    const { email } = req.body;

    const sendForgotPasswordEmailService = new SendForgotPasswordEmailService();

    sendForgotPasswordEmailService.execute({ email });

    res.status(204).send();
  }
}
