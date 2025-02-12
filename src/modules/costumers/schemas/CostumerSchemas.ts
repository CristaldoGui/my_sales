import { celebrate, Joi, Segments } from 'celebrate';

export const idCostumerValidate = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().integer().positive(),
  }),
});

export const createCustomerSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
  }),
});

export const updateCostumerSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
  }),
});
