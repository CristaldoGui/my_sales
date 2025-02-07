import { Request, Response } from 'express';
import UpdateUserAvatarService from '../service/UpdateUserAvatarService';

export default class UpdateUserAvatarController {
  async update(req: Request, res: Response): Promise<void> {
    const updateUserAvatarService = new UpdateUserAvatarService();

    const user = await updateUserAvatarService.execute({
      userId: Number(req.user.id),
      avatarFileName: req.file?.filename as string,
    });

    res.json(user);
  }
}
