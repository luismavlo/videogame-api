import { DataSource } from 'typeorm';
import { User } from './models/user.model';
import { Player } from './models/player.model';
import { ClanMember } from './models/clanMember.model';
import { Clan } from './models/clans.model';
import { Construction } from './models/constructions.model';
import { Inventory } from './models/inventory.model';
import { Item } from './models/item.model';
import { Quest_player } from './models/questPlayer.model';
import { Quest } from './models/quest.model';
import { Resource } from './models/resource.model';
import { Inventory_item } from './models/inventoryItem.model';
import { Inventory_resource } from './models/inventoryResource.model';


interface Options {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export class PostgresDatabase {

  public datasource: DataSource;

  constructor(options: Options) {
    this.datasource = new DataSource({
      type: 'postgres',
      host: options.host,
      port: options.port,
      username: options.username,
      password: options.password,
      database: options.database,
      entities: [User, Player, ClanMember, Clan, Construction, Inventory, Item, Quest_player, Quest, Resource, Inventory_item, Inventory_resource],
      synchronize: true,
    })
  }

  async connect() {
    try { 
      await this.datasource.initialize()
      console.log('Connected to database 😃')
    } catch (error) {
      console.log(error)
    }
  }

  

}