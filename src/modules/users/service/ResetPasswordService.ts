import AppError from '@shared/errors/AppError';
import { userTokensRepositories } from '../database/repositories/UserTokensRepositories';
import { userRepositories } from '../database/repositories/UsersRepositories';
import { addMinutes, isAfter } from 'date-fns';
import bcrypt from 'bcrypt';

interface IResetPassword {
  password: string;
  token: string;
}

export default class ResetPasswordService {
  async execute({ password, token }: IResetPassword) {
    const userToken = await userTokensRepositories.findByToken(token);

    if (!userToken) throw new AppError('User token not exists', 404);

    const user = await userRepositories.findById(userToken.user_id);

    if (!user) throw new AppError('User not found', 404);

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addMinutes(tokenCreatedAt, 30);

    if (isAfter(Date.now(), compareDate)) throw new AppError('Token expired', 401);

    user.password = await bcrypt.hash(password, 10);

    await userRepositories.save(user);
  }
}
