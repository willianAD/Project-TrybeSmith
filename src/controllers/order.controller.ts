import { Request, Response } from 'express';
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
}
