import { Request, Response } from "express";
import ListUserService from "../service/ListUserService";

export default class UserControllers {
  async index(req: Request, res: Response): Promise<void> {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();

    res.json(users);
  }
}
