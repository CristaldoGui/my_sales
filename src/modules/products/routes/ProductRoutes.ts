import { Router } from 'express';
import ProductsControllers from '../controllers/ProductsControllers';
import {
  createProductSchema,
  idProductsSchema,
  updateProductSchema,
} from '../schema/ProductSchemas';

const productsRouter = Router();
const productsController = new ProductsControllers();

productsRouter.get('/', productsController.index);
productsRouter.get('/:id', idProductsSchema, productsController.show);
productsRouter.post('/', createProductSchema, productsController.create);
productsRouter.put('/:id', updateProductSchema, productsController.update);
productsRouter.delete('/:id', idProductsSchema, productsController.delete);

export default productsRouter;
