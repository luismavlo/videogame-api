
import { Router } from 'express';
import { UserController } from './controller';
import { UserService } from '../services/user.service';


export class UserRoutes {
  
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const userController = new UserController(userService);

    router.get('/:id', userController.findOneUser)

    router.post('/login', userController.login)
    router.post('/register', userController.register)

    return router;
  }

}

