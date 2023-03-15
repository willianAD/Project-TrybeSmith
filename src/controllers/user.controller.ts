import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public service;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.service.create(user);

    return res.status(201).json({ token });
  };
}
