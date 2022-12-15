import Products from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';
import connection from '../models/connection';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create = async (product: Products): Promise<Products> => this.model.create(product);
}