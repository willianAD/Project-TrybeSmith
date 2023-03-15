import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';
import connection from '../models/connection';

export default class UserService {
  public model;

  constructor() {
    this.model = new UserModel(connection);
  }

  private newToken = (id: number): string => jwt.sign({ data: { userId: id } }, 'segredo', {
    algorithm: 'HS256',
    expiresIn: '2d',
  });

  public create = async (user: IUser): Promise<string> => {
    const id = await this.model.create(user);
    const token = this.newToken(id);
    return token;
  };
}
