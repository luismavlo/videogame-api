


import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Item } from './item.model';
import { Resource } from './resource.model';
import { Player } from './player.model';

@Entity()
export class Inventory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', {
    nullable: false,
    default: 1,
  })
  quantity: number;


  @ManyToOne(() => Item, (item) => item.inventory)
  item: Item;

  @ManyToOne(() => Resource, (resource) => resource.inventories)
  resource: Resource[];

  @OneToOne(() => Player, (player) => player.inventory)
  player: Player;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}