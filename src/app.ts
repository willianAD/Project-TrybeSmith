import express from 'express';
import ProductRoutes from './routes/products.routes';
import UserController from './routes/user.routes';

const app = express();

app.use(express.json());

app.use(ProductRoutes);

app.use(UserController);

export default app;
