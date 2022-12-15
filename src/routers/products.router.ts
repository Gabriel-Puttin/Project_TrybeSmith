import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();

const productsController = new ProductsController();

router.post('/', productsController.create);
router.get('/', productsController.getAll);

export default router;