

import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.model';

@Entity()
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.players)
  user: User;

  @Column('varchar', {
    length: 80,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column('int', {
    nullable: false,
    default: 1,
  })
  level: number;

  @Column('float', {
    nullable: false,
    default: 0,
  })
  experience: number;

  @Column('float', {
    nullable: false,
    default: 80,
  })
  health: number;

  @Column('float', {
    nullable: false,
    default: 100,
  })
  energy: number;

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;
}