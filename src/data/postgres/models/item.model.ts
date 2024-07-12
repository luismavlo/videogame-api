


import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Inventory } from './inventory.model';

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  name: string;

  @Column('text', {
    nullable: false,
  })
  description: string;

  @OneToMany(() => Inventory, (inventory) => inventory.item)
  inventory: Inventory[];
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}