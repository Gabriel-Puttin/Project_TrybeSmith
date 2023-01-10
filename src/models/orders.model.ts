import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { Orders } from '../interfaces/orders.interface';
import ProductsModel from './products.model';

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

  public insertOrder = async (userId: number, productsIds: number[]): Promise<void> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders(user_id) VALUE (?);',
      [userId],
    );

    const productModel = new ProductsModel(this.connection);
    const result = productsIds.map((id) => productModel.updateProduct(id, insertId));
    await Promise.all(result);
  };
}