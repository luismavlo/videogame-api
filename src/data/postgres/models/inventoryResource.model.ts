


import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Inventory } from './inventory.model';
import { Resource } from './resource.model';

@Entity()
export class Inventory_resource extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', {
    nullable: false,
    default: 1,
  })
  quantity: number;


  @ManyToOne(() => Inventory, (inventory) => inventory.inventory)
  inventory: Inventory;

  @ManyToOne(() => Resource, (resource) => resource.inventory_resource)
  resource: Resource;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}