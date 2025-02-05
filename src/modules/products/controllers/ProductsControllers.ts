import { Request, Response } from 'express';
import ListProductService from '../services/ListProductSerivce';
import ShowProductService from '../services/ShowProductService';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  async index (_req: Request, res: Response): Promise<void> {
    const listProductService = new ListProductService();
    const products = await listProductService.execute();

    res.json(products);
  };

  async show (req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const showProductService = new ShowProductService();
    const product = await showProductService.execute({ id });

    res.json(product);
  };

  async create(req: Request, res: Response): Promise<void> {
    const { name, price, quantity } = req.body;

    const createProductService = new CreateProductService();
    const product = await createProductService.execute({
      name,
      price,
      quantity,
    });

    res.json(product);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id, name, price, quantity } = req.body;

    const updateProductService = new UpdateProductService();
    const productUpdated = await updateProductService.execute({
      id,
      name,
      price,
      quantity,
    });

    res.json(productUpdated);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute({ id });

    res.status(204).send([]);
  }
}
