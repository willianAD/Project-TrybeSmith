import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  const { error } = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(user);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  return next();
};
