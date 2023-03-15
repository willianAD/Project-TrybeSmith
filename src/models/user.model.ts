import { ResultSetHeader, Pool, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';
import ILogin from '../interfaces/login.interface';

export default class UserModel {
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

  public login = async (user: ILogin): Promise<ILogin> => {
    const { username, password } = user;
    const query = `SELECT id, username FROM Trybesmith.users
      WHERE username = ? AND password = ?`;
    const [[result]] = await this.connection.execute<RowDataPacket[] & ILogin[]>(
      query,
      [username, password],
    );
    return result;
  };
}
