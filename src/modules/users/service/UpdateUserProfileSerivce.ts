import AppError from '@shared/errors/AppError';
import { userRepositories } from '../database/repositories/UsersRepositories';
import bcrypt from 'bcrypt';
import { User } from '../database/entities/User';

interface IUpdateUserProfile {
  user_id: number;
  name: string;
  email: string;
  new_password: string;
  old_password: string;
}

export default class UpdateUserProfileService {
  async execute({
    user_id,
    name,
    email,
    new_password,
    old_password,
  }: IUpdateUserProfile): Promise<User> {
    const user = await userRepositories.findById(user_id);

    if (!user) throw new AppError('User not found', 404);

    if (email) {
      const userEmail = await userRepositories.findByEmail(email);

      if (userEmail) throw new AppError('This email already is used');

      user.email = email;
    }

    if (new_password && !old_password)
      throw new AppError('Old password is required');

    if (new_password && old_password) {
      const isOldPasswordValid = await bcrypt.compare(
        old_password,
        user.password,
      );

      if (!isOldPasswordValid) throw new AppError('Password incorrect');

      user.password = await bcrypt.hash(new_password, 10);
    }

    if (name) {
      user.name = name;
    }

    await userRepositories.save(user);

    return user;
  }
}
