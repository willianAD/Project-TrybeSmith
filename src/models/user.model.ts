import { ResultSetHeader, Pool } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class ProductModel {
  public connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: IUser): Promise<number> => {
    const { username, vocation, level, password } = user;
    const query = `INSERT INTO Trybesmith.users
      (username, vocation, level, password) VALUES (?,?,?,?)`;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, vocation, level, password],
    );
    return insertId;
  };

  // public getAll = async (): Promise<IProductAll[]> => {
  //   const query = 'SELECT * FROM Trybesmith.products';
  //   const [result] = await this.connection.execute<RowDataPacket[] & IProduct[]>(query);
  //   return result;
  // };

//   public async getById(id: number): Promise<IProduct> {
//     const query = 'SELECT * FROM Trybesmith.products WHERE id = ?';
//     const [[result]] = await this.connection.execute<RowDataPacket[] & IProduct[]>(query, [id]);
//     return result;
//   }
}
