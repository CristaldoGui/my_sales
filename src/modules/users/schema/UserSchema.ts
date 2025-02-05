import { celebrate, Segments, Joi } from "celebrate";
import { string } from "joi";

export const createUserSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: string().required(),
    email: string().email().required(),
    password: string().required()
  })
})
