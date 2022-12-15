import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private usersService = new OrdersService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const { type, message } = await this.usersService.getAll();
    if (type) return res.status(type).send({ message });
    res.status(200).json(message);
  };
}