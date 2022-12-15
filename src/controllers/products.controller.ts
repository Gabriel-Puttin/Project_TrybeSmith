import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const response = await this.productsService.create(req.body);
    res.status(201).json(response);
  };
}