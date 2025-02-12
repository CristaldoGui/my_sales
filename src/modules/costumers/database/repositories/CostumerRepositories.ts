import AppDataSource from '@shared/typeorm/data-source';
import Costumers from '../entities/Costumer';
import AppError from '@shared/errors/AppError';

export const costumerRepositories = AppDataSource.getRepository(
  Costumers,
).extend({
  async findByName(name: string): Promise<Costumers | null> {
    const costumer = this.findOneBy({ name });

    if (!costumer) throw new AppError('Costumer not found', 404);

    return costumer;
  },

  async findById(id: number): Promise<Costumers | null> {
    const costumer = this.findOneBy({ id });

    if (!costumer) throw new AppError('Costumer not found', 404);

    return costumer;
  },

  async findByEmail(email: string): Promise<Costumers | null> {
    const costumer = this.findOneBy({ email });

    if (!costumer) throw new AppError('User not found', 404);

    return costumer;
  },
});
