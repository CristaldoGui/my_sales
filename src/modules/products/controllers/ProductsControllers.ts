import { Request, Response } from 'express';
import ListProductService from '../services/ListProductSerivce';
import { Product } from '../database/entities/Product';
import ShowProductService from '../services/ShowProductService';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProduct Service';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  async index(_req: Request, res: Response): Promise<Response> {
    const listProductService = new ListProductService();
    const products = await listProductService.execute();

    return res.json(products);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showProductService = new ShowProductService();
    const product = await showProductService.execute({ id });

    return res.json(product);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body;

    const createProductService = new CreateProductService();
    const product = await createProductService.execute({ name, price, quantity });

    return res.json(product);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, name, price, quantity } = req.body;

    const updateProductService = new UpdateProductService();
    const productUpdated = await updateProductService.execute({
      id,
      name,
      price,
      quantity,
    });

    return res.json(productUpdated);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute({ id });

    return res.status(204).send([]);
  }
}
