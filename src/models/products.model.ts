import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Products } from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: Products): Promise<Products> => {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  };

  public getAll = async (): Promise<Products[]> => {
    const [rows] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return rows as Products[];
  };

  public updateProduct = async (orderId: number, productsIds: number): Promise<void> => {
    await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [productsIds, orderId],
    );
  };
}