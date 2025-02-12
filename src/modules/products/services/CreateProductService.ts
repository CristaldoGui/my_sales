import AppError from '@shared/errors/AppError';
import { Product } from '../database/entities/Product';
import { productsRepositories } from '../database/repositories/ProductsRepositories';

interface ICreateProductService {
  name: string;
  price: number;
  quantity: number;
}

export default class CreateProductService {
  async execute({
    name,
    price,
    quantity,
  }: ICreateProductService): Promise<Product> {
    const productExists = await productsRepositories.findByName(name);

    if (productExists)
      throw new AppError('There is already one product with this name', 409);

    const product = productsRepositories.create({ name, price, quantity });

    await productsRepositories.save(product);

    return product;
  }
}
