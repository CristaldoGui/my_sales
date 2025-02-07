import AppError from '@shared/errors/AppError';
import { userRepositories } from '../database/UsersRepositories';
import { userTokensRepositories } from '../database/UserToeknsRepositories';

interface ISendForgotPasswordEmail {
  email: string;
}

export default class SendForgotPasswordEmailService {
  async execute({ email }: ISendForgotPasswordEmail): Promise<void> {
    const user = await userRepositories.findByEmail(email);

    if (!user) throw new AppError('User not found', 404);

    const token = await userTokensRepositories.generate(user.id);

    console.log(token);
  }
}
