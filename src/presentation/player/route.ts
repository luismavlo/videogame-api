

import { Router } from 'express';
import { PlayerController } from './controller';


export class PlayerRoutes {
  
  static get routes(): Router {
    const router = Router();

    const playerController = new PlayerController()

    router.post('/', playerController.createPlayer)
    router.get('/:id', playerController.findOnePlayer)

    return router;
  }

}

