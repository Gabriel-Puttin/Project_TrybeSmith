import { Products } from '../../interfaces/products.interface';
import { productsSchema } from './schemas';

const HTTP_BAD_REQUEST_STATUS = 400;

const validateProduct = (product: Products) => {
  const { name, amount } = product;
  const { error } = productsSchema.validate(product);
  if (!name) return { type: HTTP_BAD_REQUEST_STATUS, message: '"name" is required' };
  if (!amount) return { type: HTTP_BAD_REQUEST_STATUS, message: '"amount" is required' };
  if (error) return { type: HTTP_BAD_REQUEST_STATUS, message: error.message };
};

export default validateProduct;