import { Request, Response } from 'express';
import ResetPasswordService from '../service/ResetPasswordService';

export default class ResetPasswordController {
  async create(req: Request, res: Response): Promise<void> {
    const { password, token } = req.body;

    const resetPasswordService = new ResetPasswordService();

    resetPasswordService.execute({ password, token });

    res.status(204).send();
  }
}
