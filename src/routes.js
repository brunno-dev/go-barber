import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Bruno Martins',
//     email: 'bruno@martins.com.br',
//     password_hash: '123456',
//   });
//   return res.json(user);
// });

export default routes;
