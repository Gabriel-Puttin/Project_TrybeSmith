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

export const productsIdsSchema = Joi.array().items(Joi.number()).required().messages({
  'any.required': '"productsIds" is required',
  'array.base': '"productsIds" must be an array',
});