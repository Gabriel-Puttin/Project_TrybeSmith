import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const { type, message } = await this.productsService.create(req.body);
    if (type) return res.status(type).send({ message });
    res.status(201).json(message);
  };

  public getAll = async (_req: Request, res: Response) => {
    const { type, message } = await this.productsService.getAll();
    if (type) return res.status(type).send({ message });
    res.status(200).json(message);
  };
}