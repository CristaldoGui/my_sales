import { costumerRepositories } from '@modules/costumers/database/repositories/CostumerRepositories';
import { Product } from '@modules/products/database/entities/Product';
import AppError from '@shared/errors/AppError';

interface ICreateOrder {
  costumer_id: number;
  products: Product[];
}

export class CreateOrderService {
  async execute({ costumer_id, products }: ICreateOrder) {
    const costumerExists = await costumerRepositories.findById(costumer_id);

    if (!costumerExists) throw new AppError('Costumer not found', 404);

    
  }
}
