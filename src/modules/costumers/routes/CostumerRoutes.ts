import { Router } from 'express';
import CostumerControllers from '../controllers/CostumerControllers';
import AuthMiddleware from '@shared/middlewares/AuthMiddleware';
import {
  createCustomerSchema,
  idCostumerValidate,
  updateCostumerSchema,
} from '../schemas/CostumerSchemas';

const costumerRouter = Router();

const costumerControllers = new CostumerControllers();

costumerRouter.use(AuthMiddleware.execute);
costumerRouter.get('/', costumerControllers.index);
costumerRouter.get('/:id', idCostumerValidate, costumerControllers.show);
costumerRouter.post('/', createCustomerSchema, costumerControllers.create);
costumerRouter.put(
  '/:id',
  idCostumerValidate,
  updateCostumerSchema,
  costumerControllers.update,
);
costumerRouter.delete('/:id', idCostumerValidate, costumerControllers.delete);

export default costumerRouter;
