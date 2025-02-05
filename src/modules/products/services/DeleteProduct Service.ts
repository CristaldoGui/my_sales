import AppError from '@shared/errors/AppError';
import { productsRepositories } from '../database/repositories/ProductsRepositories';
import { Product } from '../database/entities/Product';

interface IDeleteProductService {
  id: string;
}

export default class DeleteProductService {
  async execute({ id }: IDeleteProductService): Promise<void> {
    const product = await productsRepositories.findById(id);

    if (!product) throw new AppError('Product not found', 404);

    await productsRepositories.remove(product);
  }
}
