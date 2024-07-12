import { envs } from './config/envs';
import { Server } from './presentation/server';


async function main() {

  const server = new Server({
    port: envs.PORT,
  })

  await server.start();

}


main();