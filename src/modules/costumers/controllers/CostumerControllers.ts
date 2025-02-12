import { Request, Response } from 'express';
import ListCostumerService from '../services/ListCostumersServices';
import CreateCostumerService from '../services/CreateCustumerService';
import UpdateCostumerService from '../services/UpdateCostumerService';
import ShowCostumerService from '../services/ShowCostumerService';
import { request } from 'http';
import DeleteCostumerService from '../services/DeleteCostumerService';

export default class CostumerControllers {
  async index(req: Request, res: Response): Promise<void> {
    const listCostumersService = new ListCostumerService();

    const costumers = await listCostumersService.execute();

    res.json(costumers);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;

    const createCostumerService = new CreateCostumerService();
    const costumer = await createCostumerService.execute({ name, email });

    res.json(costumer);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;
    const id = Number(req.params.id);

    const updateCostumerService = new UpdateCostumerService();
    const costumer = updateCostumerService.execute({ id, name, email });

    res.json(costumer);
  }

  async show(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    const showCostumerService = new ShowCostumerService();
    const costumer = showCostumerService.execute({ id });

    res.json(costumer);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    const deleteCostumerService = new DeleteCostumerService();

    await deleteCostumerService.execute({ id });

    res.status(204).json([]);
  }
}
