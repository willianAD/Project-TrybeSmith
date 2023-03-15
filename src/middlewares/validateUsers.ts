import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  const require = Joi.object({
    username: Joi.required(),
    vocation: Joi.required(),
    level: Joi.required(),
    password: Joi.required(),
  }).validate(user);

  const typeOfAndLength = Joi.object({
    username: Joi.string().min(3),
    vocation: Joi.string().min(3),
    level: Joi.number().min(1),
    password: Joi.string().min(8),
  }).validate(user);

  if (require.error) return res.status(400).json({ message: require.error.message });

  if (typeOfAndLength) return res.status(422).json({ message: typeOfAndLength.error?.message });

  return next();
};
