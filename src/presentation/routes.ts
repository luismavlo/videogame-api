


import { Router } from 'express';
import { PlayerRoutes } from './player/route';
import { UserRoutes } from './user/routes';
import { InventoryRoutes } from './inventory/controller';
import { ClanRoutes } from './clan/route';
import { QuestRoutes } from './quest/routes';


export class AppRoutes {
  
  static get routes(): Router {
    const router = Router();

    router.use('/api/v1/player', PlayerRoutes.routes);
    router.use('/api/v1/user', UserRoutes.routes);
    router.use('/api/v1/inventory', InventoryRoutes.routes)
    router.use('/api/v1/clan', ClanRoutes.routes)
    router.use('/api/v1/quest', QuestRoutes.routes)

    return router;
  }

}

