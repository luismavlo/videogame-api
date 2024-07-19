


import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Item } from './item.model';
import { Resource } from './resource.model';
import { Player } from './player.model';
import { Inventory_resource } from './inventoryResource.model';
import { Inventory_item } from './inventoryItem.model';

@Entity()
export class Inventory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Player, (player) => player.inventory)
  @JoinColumn()
  player: Player;
  
  @OneToMany(() => Inventory_resource, (inventory_resource) => inventory_resource.inventory )
  inventory: Inventory_resource[];

  @OneToMany(() => Inventory_item, (inventory_item) => inventory_item.inventory)
  inventory_item: Inventory_item[];
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}