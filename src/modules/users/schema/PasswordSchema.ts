import { celebrate, Joi, Segments } from 'celebrate';

export const sendForgotPasswordEmailSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
});

export const resetPasswordSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    token: Joi.string().required(),
    password: Joi.string().required(),
    passwordConfirmation: Joi.string().valid(Joi.ref('password')).required(),
  }),
});
