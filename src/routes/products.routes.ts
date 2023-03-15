import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import ValidateProduct from '../middlewares/validateProducts';

const router = Router();

const productController = new ProductController();

router.post('/products', ValidateProduct, productController.create);

router.get('/products', productController.getAll);

export default router;
