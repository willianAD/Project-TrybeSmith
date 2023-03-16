import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import OrderService from '../services/order.service';

export default class OrderController {
  public service;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const allOrders = await this.service.getAll();

    return res.status(200).json(allOrders);
  };

  public create = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const token = req.header('Authorization');
    
    try {   
      const decoded = jwt.verify(token as string, 'segredo') as JwtPayload;
    
      const order = await this.service.create(productsIds, decoded.data.userId.id);

      return res.status(201).json(order);
    } catch (error) {
      return error;
    }
  };
}
