// import { Request, Response, NextFunction } from 'express';
// import Joi from 'joi';

// export default async (req: Request, res: Response, next: NextFunction) => {
//   const user = req.body;

//   const require = Joi.object({
//     username: Joi.required(),
//     vocation: Joi.required(),
//     level: Joi.required(),
//     password: Joi.required(),
//   }).validate(user);

//   const stringLength = Joi.object({
//     name: Joi.string().min(3),
//     amount: Joi.string().min(3),
//   }).validate(user);

//   if (require.error) {
//     return res.status(400).json({ message: require.error.message });
//   }

//   if (stringLength) {
//     return res.status(422).json({ message: stringLength.error?.message });
//   }

//   return next();
// };
