import Costumers from '../database/entities/Costumer';
import { costumerRepositories } from '../database/repositories/CostumerRepositories';

export default class ListCostumerService {
  async execute(): Promise<Costumers[]> {
    const costumers = costumerRepositories.find();

    return costumers;
  }
}
