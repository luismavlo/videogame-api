


import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Inventory } from './inventory.model';
import { Item } from './item.model';

@Entity()
export class Inventory_item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Inventory, (inventory) => inventory.inventory_item)
  inventory: Inventory;

  @ManyToOne(() => Item, (item) => item.inventory_item)
  item: Item

  @Column('int', {
    nullable: false,
    default: 1,
  })
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}