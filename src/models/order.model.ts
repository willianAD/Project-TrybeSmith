import { ResultSetHeader, RowDataPacket, Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrder[]> => {
    const query = `SELECT o.id, o.user_id as userId,
      JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
      GROUP BY o.id`;
    const [result] = await this.connection.execute<RowDataPacket[] & IOrder[]>(query);
    return result;
  };

  public create = async (userId: number): Promise<number> => {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);
    return insertId;
  };
}
