import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../middlewares/validateLogin';
import ValidateUsers from '../middlewares/validateUsers';

const router = Router();

const userController = new UserController();

router.post('/users', ValidateUsers, userController.create);

router.post('/login', validateLogin, userController.login);

export default router;
