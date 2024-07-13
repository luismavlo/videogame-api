


import { Router } from 'express';
import { PlayerRoutes } from './player/route';


export class AppRoutes {
  
  static get routes(): Router {
    const router = Router();

    router.use('/api/v1/player', PlayerRoutes.routes);

    return router;
  }

}

