import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
  const order = req.body;

  const { error } = Joi.object({ productsIds: Joi.required() }).validate(order);

  const arrayNumber = Joi.object({
    productsIds: Joi.array().items(Joi.number().required()),
  }).messages({
    'number.base': '"productsIds" must include only numbers',
    'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
  }).validate(order);
  
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  
  if (arrayNumber.error) {
    return res.status(422).json({ message: arrayNumber.error.message });
  }

  return next();
};
