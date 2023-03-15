import OrderModel from '../models/order.model';
import IOrder from '../interfaces/order.interface';
import connection from '../models/connection';

export default class OrderService {
  public model;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => {
    const allOrders = await this.model.getAll();
    return allOrders;
  };
}
