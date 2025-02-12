import Costumers from "../database/entities/Costumer";
import { costumerRepositories } from "../database/repositories/CostumerRepositories";

interface IShowCostumerService {
  id: number;
}

export default class ShowCostumerService {
  async execute({id}: IShowCostumerService): Promise<Costumers | null> {
    const costumer = await costumerRepositories.findById(id);

    return costumer;
  }
}
