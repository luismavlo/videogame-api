import "reflect-metadata"
import { envs } from './config/envs';
import { Server } from './presentation/server';
import { PostgresDatabase } from './data';


async function main() {

  const postgres = new PostgresDatabase({
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    username: envs.DB_USERNAME,
    password: envs.DB_PASSWORD,
    database: envs.DB_DATABASE,
  })

  await postgres.connect();


  const server = new Server({
    port: envs.PORT,
  })

  await server.start();

}


main();