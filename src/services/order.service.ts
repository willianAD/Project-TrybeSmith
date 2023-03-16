import OrderModel from '../models/order.model';
import IOrder from '../interfaces/order.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class OrderService {
  public model;
  
  public modelProduct;

  constructor() {
    this.model = new OrderModel(connection);
    this.modelProduct = new ProductModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => {
    const allOrders = await this.model.getAll();
    return allOrders;
  };

  public create = async (productsIds: number[], userId: number): Promise<IOrder> => {
    const orderId = await this.model.create(userId);
    await Promise.all(productsIds
      .map((e) => this.modelProduct.updateProduct(orderId, e)));

    return { userId, productsIds };
  };
}
