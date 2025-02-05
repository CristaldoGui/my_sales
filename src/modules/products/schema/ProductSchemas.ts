import { celebrate, Segments, Joi } from "celebrate";

export const createProductSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().integer().required(),
    quantity: Joi.number().integer().required()
  })
})

export const updateProductSchema = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  }),

  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    quantity: Joi.number().integer().positive().required()
  })
})

export const idProductsSchema = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
})


