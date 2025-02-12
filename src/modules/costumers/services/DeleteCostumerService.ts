import { userRepositories } from '@modules/users/database/repositories/UsersRepositories';
import AppError from '@shared/errors/AppError';
import { costumerRepositories } from '../database/repositories/CostumerRepositories';

interface IDeleteCostumerService {
  id: number;
}

export default class DeleteCostumerService {
  async execute({ id }: IDeleteCostumerService): Promise<void> {
    const costumer = await costumerRepositories.findById(id);

    if (!costumer) throw new AppError('Costumer not found', 404);
    console.log(costumer)
    await costumerRepositories.remove(costumer);
  }
}
