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

  public login = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.service.login(user);

    if (!token) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    return res.status(200).json({ token });
  };
}
