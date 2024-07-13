

import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.model';
import { Construction } from './constructions.model';
import { Quest_player } from './questPlayer.model';
import { Clan } from './clans.model';
import { ClanMember } from './clanMember.model';
import { Inventory } from './inventory.model';

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

  @OneToMany(() => Construction, (construction) => construction.player)
  constructions: Construction[];

  @OneToMany(() => Quest_player, (quest_player) => quest_player.player)
  quest_players: Quest_player[];

  @OneToMany(() => ClanMember, (clanMember) => clanMember.player)
  clanMembers: ClanMember[];

  @OneToOne(() => Inventory, (inventory) => inventory.player)
  inventory: Inventory;

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;
}