
import { Router } from 'express';
import { UserController } from './controller';
import { UserService } from '../services/user.service';


export class UserRoutes {
  
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const userController = new UserController(userService);

    router.get('/:id', userController.findOneUser)

    return router;
  }

}

