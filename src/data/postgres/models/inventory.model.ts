


import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Item } from './item.model';
import { Resource } from './resource.model';

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
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}