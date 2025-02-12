import AppError from '@shared/errors/AppError';
import Costumers from '../database/entities/Costumer';
import { costumerRepositories } from '../database/repositories/CostumerRepositories';
import { userRepositories } from '@modules/users/database/repositories/UsersRepositories';

interface ICreateCostumer {
  name: string;
  email: string;
}

export default class CreateCostumerService {
  async execute({ name, email }: ICreateCostumer): Promise<Costumers> {
    const emailExists = await costumerRepositories.findByEmail(email);

    if (emailExists) throw new AppError('This email already used', 400);

    const newCostumer = userRepositories.create({ name, email });

    await userRepositories.save(newCostumer);

    return newCostumer;
  }
}
