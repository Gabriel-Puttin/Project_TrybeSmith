import { Pool, RowDataPacket } from 'mysql2/promise';
import { Orders } from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Orders[]> => {
    const [rows] = await this.connection.execute<RowDataPacket[]>(
      `SELECT A.id, A.user_id AS userId, JSON_ARRAYAGG(B.id) AS productsIds
        FROM Trybesmith.orders AS A
        INNER JOIN Trybesmith.products AS B
        ON A.id = B.order_id
        GROUP BY A.id`,
    );
    return rows as Orders[];
  };
}