


import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Player } from './player.model';
import { Quest } from './quest.model';

@Entity()
export class Quest_player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Player, (player) => player.quest_players)
  player: Player;

  @ManyToOne(() => Quest, (quest) => quest.questsPlayer)
  quest: Quest;
  
  @Column('boolean', {
    nullable: false,
    default: false,
  })
  completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}