


import { Router } from 'express';
import { QuestController } from './controller';
import { QuestService } from '../services/quest.service';
import { PlayerService } from '../services/player.service';
import { UserService } from '../services/user.service';


export class QuestRoutes {
  
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const playerService = new PlayerService(userService);
    const questService = new QuestService(playerService);
    const controller = new QuestController(questService);

    router.post('/:playerId/assign', controller.addQuestToPlayer)

    return router;
  }

}

