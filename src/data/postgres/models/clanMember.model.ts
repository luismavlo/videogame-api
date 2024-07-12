


import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Player } from './player.model';
import { Clan } from './clans.model';

@Entity()
export class ClanMember extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Player, (player) => player.clanMembers)
  player: Player;

  @ManyToOne(() => Clan, (clan) => clan.clanMembers)
  clan: Clan;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}