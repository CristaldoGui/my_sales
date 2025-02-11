import { Request, Response } from 'express';
import ShowUserProfileService from '../service/ShowUserProfileService';

export default class ShowUserProfileController {
  async get(req: Request, res: Response): Promise<void> {
    const user_id = Number(req.user.id);

    const showUserProfileService = new ShowUserProfileService();

    const userProfile = await showUserProfileService.execute({ user_id });

    res.json(userProfile);
  }
}
