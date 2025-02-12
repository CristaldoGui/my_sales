import AppError from '@shared/errors/AppError';
import { costumerRepositories } from '../database/repositories/CostumerRepositories';
import Costumers from '../database/entities/Costumer';

interface IUpdateCostumerService {
  id: number;
  name: string;
  email: string;
}

export default class UpdateCostumerService {
  async execute({ id, name, email }: IUpdateCostumerService): Promise<Costumers> {
    const costumer = await costumerRepositories.findById(id);

    if (!costumer) throw new AppError('Costumer not found', 404);

    if (name) costumer.name = name;

    if (email && email !== costumer.email) {
      const emailExists = await costumerRepositories.findByEmail(email);

      if (emailExists) throw new AppError('This email already axists', 409);

      costumer.email = email;

    }

    await costumerRepositories.save(costumer);

    return costumer;
  }
}
