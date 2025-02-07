import AppError from '@shared/errors/AppError';
import { userRepositories } from '../database/repositories/UsersRepositories';
import { hash } from 'bcrypt';
import { User } from '../database/entities/User';

interface ICreateUserService {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  async execute({ name, email, password }: ICreateUserService): Promise<User> {
    const emailExists = await userRepositories.findByEmail(email);

    if (emailExists) throw new AppError('This email already exists', 409);

    const hashedPassword = await hash(password, 10);

    const user = userRepositories.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepositories.save(user);

    return user;
  }
}
