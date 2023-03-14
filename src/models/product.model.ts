import { ResultSetHeader, RowDataPacket, Pool } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';
import IProductAll from '../interfaces/productAll.interface';

export default class ProductModel {
  public connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return { id: insertId, name, amount };
  };

  public getAll = async (): Promise<IProductAll[]> => {
    const query = 'SELECT * FROM Trybesmith.products';
    const [result] = await this.connection.execute<RowDataPacket[] & IProduct[]>(query);
    return result;
  };

//   public async getById(id: number): Promise<IProduct> {
//     const query = 'SELECT * FROM Trybesmith.products WHERE id = ?';
//     const [[result]] = await this.connection.execute<RowDataPacket[] & IProduct[]>(query, [id]);
//     return result;
//   }
}
