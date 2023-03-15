import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import UserController from '../controllers/user.controller';

const router = Router();

const productController = new ProductController();

router.post('/products', productController.create);

router.get('/products', productController.getAll);

const userController = new UserController();

router.post('/users', userController.create);

export default router;
