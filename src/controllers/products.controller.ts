import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const response = await this.productsService.create(req.body);
    res.status(201).json(response);
  };

  public getAll = async (_req: Request, res: Response) => {
    const response = await this.productsService.getAll();
    if (!response) return res.status(400).send({ message: 'Cannot get products' });
    res.status(200).json(response);
  };
}