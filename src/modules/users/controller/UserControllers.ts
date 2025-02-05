import { Request, Response } from 'express';
import ListUserService from '../service/ListUserService';
import CreateUserService from '../service/CreateUserService';

export default class UserControllers {
  async index(_req: Request, res: Response): Promise<void> {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();

    res.json(users);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ name, email, password });

    res.json(user);
  }
}
