
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Quest_player } from './questPlayer.model';

@Entity()
export class Quest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column('text', {
    nullable: false,
  })
  description: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  reward: string;

  @Column('float', {
    nullable: false,
  })
  exp: number;

  @OneToMany(() => Quest_player, (quest_player) => quest_player.quest)
  questsPlayer: Quest_player[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}