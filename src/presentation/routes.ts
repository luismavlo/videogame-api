


import { Router } from 'express';
import { PlayerRoutes } from './player/route';
import { UserRoutes } from './user/routes';


export class AppRoutes {
  
  static get routes(): Router {
    const router = Router();

    router.use('/api/v1/player', PlayerRoutes.routes);
    router.use('/api/v1/user', UserRoutes.routes);

    return router;
  }

}

