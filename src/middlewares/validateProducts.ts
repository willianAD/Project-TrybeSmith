import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;

  const require = Joi.object({ name: Joi.required(), amount: Joi.required() }).validate(product);

  const stringLength = Joi.object({
    name: Joi.string().min(3),
    amount: Joi.string().min(3),
  }).validate(product);

  if (require.error) {
    return res.status(400).json({ message: require.error.message });
  }

  if (stringLength.error) {
    return res.status(422).json({ message: stringLength.error?.message });
  }

  return next();
};
