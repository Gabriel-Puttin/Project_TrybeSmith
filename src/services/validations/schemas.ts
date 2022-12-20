import Joi from 'joi';

export const productsSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const usersSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().integer().min(1).required(),
  password: Joi.string().min(8).required(),
});