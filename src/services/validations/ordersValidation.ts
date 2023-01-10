import { productsIdsSchema } from './schemas';

const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_UNPROCESSABLE_STATUS = 422;

const validateOrder = (productsIds: number[]) => {
  if (!productsIds) return { type: HTTP_BAD_REQUEST_STATUS, message: '"productsIds" is required' };
  if (productsIds.length === 0) {
    return { type: HTTP_UNPROCESSABLE_STATUS, message: '"productsIds" must include only numbers' };
  }
  const { error } = productsIdsSchema.validate(productsIds);
  if (error) return { type: HTTP_UNPROCESSABLE_STATUS, message: error.message };
};

export default validateOrder;