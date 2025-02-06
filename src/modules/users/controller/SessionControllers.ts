import { Request, Response } from 'express';
import SessionService from '../service/SessionService';

export default class SessionController {
  async create(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const sessionService = new SessionService();
    const userToken = await sessionService.execute({email, password});

    res.json(userToken);
  }
}
