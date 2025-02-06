import { Request, Response } from 'express';
import SessionUserService from '../service/SessionUserService';

export default class SessionController {
  async create(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const sessionUserService = new SessionUserService();
    const userToken = await sessionUserService.execute({email, password});

    res.json(userToken);
  }
}
