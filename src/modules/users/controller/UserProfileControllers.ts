import { Request, Response } from 'express';
import ShowUserProfileService from '../service/ShowUserProfileService';
import UpdateUserProfileService from '../service/UpdateUserProfileService';

export default class ShowUserProfileController {
  async show(req: Request, res: Response): Promise<void> {
    const user_id = Number(req.user.id);

    const showUserProfileService = new ShowUserProfileService();

    const userProfile = await showUserProfileService.execute({ user_id });

    res.json(userProfile);
  }

  async update(req: Request, res: Response): Promise<void> {
    const user_id = Number(req.user.id);
    const { name, email, new_password, old_password } = req.body;

    const updateUserPorfileService = new UpdateUserProfileService();

    const userUpdated = await updateUserPorfileService.execute({
      user_id,
      name,
      email,
      new_password,
      old_password,
    });

    res.json(userUpdated);
  }
}
