import { Objreturn } from '../interfaces/orders.interface';
import OrdersModel from '../models/orders.model';
import connection from '../models/connection';

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
}