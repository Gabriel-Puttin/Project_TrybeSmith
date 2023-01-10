import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import verifyUserToken from '../middleware/verifyToken.middleware';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll);
router.post('/', verifyUserToken, ordersController.createOrder);

export default router;