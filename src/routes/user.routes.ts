import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

const userController = new UserController();

router.post('/users', userController.create);

router.post('/login', validateLogin, userController.login);

export default router;
