import { userRepositories } from '@modules/users/database/repositories/UsersRepositories';
import AppError from '@shared/errors/AppError';

interface IDeleteCostumerService {
  id: number;
}

export default class DeleteCostumerService {
  async execute({ id }: IDeleteCostumerService): Promise<void> {
    const costumer = await userRepositories.findById(id);

    if (!costumer) throw new AppError('Costumer not found', 404);

    await userRepositories.remove(costumer);
  }
}
