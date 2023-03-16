import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import ValidateOrder from '../middlewares/validateOrder';
import validateToken from '../middlewares/validateToken';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.getAll);

router.post('/orders', validateToken, ValidateOrder, orderController.create);

export default router;
