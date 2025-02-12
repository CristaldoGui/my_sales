import { Joi, Segments, celebrate } from 'celebrate';

export const UpdateUserSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    old_password: Joi.string(),
    new_password: Joi.string().optional(),
    new_password_confirmation: Joi.string()
      .valid(Joi.ref('new_password'))
      .when('new_password', { is: Joi.exist(), then: Joi.required() }),
  }),
});
