import AppError from '@shared/errors/AppError';
import Costumers from '../database/entities/Costumer';
import { costumerRepositories } from '../database/repositories/CostumerRepositories';
import { userRepositories } from '@modules/users/database/repositories/UsersRepositories';

interface ICreateCostumerService {
  name: string;
  email: string;
}

export default class CreateCostumerService {
  async execute({ name, email }: ICreateCostumerService): Promise<Costumers> {
    const emailExists = await costumerRepositories.findByEmail(email);

    if (emailExists) throw new AppError('This email already used', 400);

    const newCostumer = costumerRepositories.create({ name, email });

    await costumerRepositories.save(newCostumer);

    return newCostumer;
  }
}
