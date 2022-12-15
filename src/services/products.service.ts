import { Products, Objreturn } from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';
import connection from '../models/connection';
import validateProduct from './validations/productsValidation';

const HTTP_NOT_FOUND_STATUS = 404;

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create = async (product: Products): Promise<Objreturn> => {
    const verifyProduct = validateProduct(product);
    if (verifyProduct) return verifyProduct;
    const createProduct = await this.model.create(product);
    return { type: null, message: createProduct };
  };

  public getAll = async (): Promise<Objreturn> => {
    const products = await this.model.getAll();
    if (!products) return { type: HTTP_NOT_FOUND_STATUS, message: 'Products not found' };
    return { type: null, message: products };
  };
}