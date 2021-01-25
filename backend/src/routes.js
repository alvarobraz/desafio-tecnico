import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CustomerController from './app/controllers/CustomerController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// routes.delete('/customers/:id', CustomerController.delete);
routes.post('/customers', CustomerController.store);
routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
