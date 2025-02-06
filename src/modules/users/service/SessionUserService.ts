// MODULES
import AppError from '@shared/errors/AppError';
import { userRepositories } from '../database/UsersRepositories';
import { User } from '../database/entities/User';

// LIBS
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import 'dotenv/config';

interface ISessionUserService {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class SessionUserService {
  async execute({ email, password }: ISessionUserService): Promise<IResponse> {
    const user = await userRepositories.findByEmail(email);

    if (!user) throw new AppError('Incorrect email/password combination', 401);

    const passwordCompared = await compare(password, user.password);

    if (!passwordCompared)
      throw new AppError('Incorrect email/password combination', 401);

    const token = sign({}, process.env.APP_SECRET as string, {
      subject: user.id.toString(),
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}
