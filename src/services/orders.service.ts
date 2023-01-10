import { Objreturn } from '../interfaces/orders.interface';
import OrdersModel from '../models/orders.model';
import connection from '../models/connection';
import validateOrder from './validations/ordersValidation';

const HTTP_NOT_FOUND_STATUS = 404;

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAll = async (): Promise<Objreturn> => {
    const orders = await this.model.getAll();
    if (!orders) return { type: HTTP_NOT_FOUND_STATUS, message: 'Orders not found' };
    return { type: null, message: orders };
  };

  public createOrder = async (userId: number, productsIds: number[]): Promise<{
    type: null | number;
    message: string | object;
  }> => {
    const verifyOrder = validateOrder(productsIds);
    if (verifyOrder) return verifyOrder;

    await this.model.insertOrder(userId, productsIds);
    return { type: null, message: { userId, productsIds } };
  };
}