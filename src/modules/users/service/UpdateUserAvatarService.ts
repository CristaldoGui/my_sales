import AppError from '@shared/errors/AppError';
import { userRepositories } from '../database/UsersRepositories';
import uploadFolder from '@config/uploads'
import path from 'path';
import  fs  from 'fs';
import { User } from '../database/entities/User';

interface IUpdateUserAvatar {
  userId: number;
  avatarFileName: string;
}

export default class UpdateUserAvatarService {
  async execute({ userId, avatarFileName }: IUpdateUserAvatar): Promise<User> {
    const user = await userRepositories.findById(userId);

    if (!user) throw new AppError('User not found', 404);

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadFolder.directory, avatarFileName);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;
    await userRepositories.save(user);
    return user;
  }
}
