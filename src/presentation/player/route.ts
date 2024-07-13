

import { Router } from 'express';
import { PlayerController } from './controller';
import { UserService } from '../services/user.service';
import { PlayerService } from '../services/player.service';


export class PlayerRoutes {
  
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const playerService = new PlayerService(userService);
    const playerController = new PlayerController(playerService)

    router.post('/', playerController.createPlayer)
    router.get('/:id', playerController.findOnePlayer)

    return router;
  }

}

