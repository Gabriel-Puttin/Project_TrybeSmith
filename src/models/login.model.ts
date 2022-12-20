import { Pool, RowDataPacket } from 'mysql2/promise';
import User from '../interfaces/login.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getByUserName = async (userInfo: User): Promise<User> => {
    const { username } = userInfo;
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );
    return user as User;
  };
}