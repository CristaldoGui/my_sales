import AppDataSource from '@shared/typeorm/data-source';
import { Product } from '../entities/Product';
import { In } from 'typeorm';

interface IFindProducts {
  id: number;
}

export const productsRepositories = AppDataSource.getRepository(Product).extend(
  {
    async findByName(name: string): Promise<Product | null> {
      return this.findOneBy({ name });
    },
    async findById(id: number): Promise<Product | null> {
      return this.findOneBy({ id });
    },

    async findAllByIds(products: IFindProducts[]): Promise<Product[]> {
      const productsIds = products.map(product => product.id);

      const existenProducts = await this.find({
        where: { id: In(productsIds) },
      });

      return existenProducts;
    },
  },
);
