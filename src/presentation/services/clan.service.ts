import { ClanMember, ClanMemberRole } from '../../data';
import { CustomError, JoinMember } from '../../domain';
import { PlayerService } from './player.service';


export class ClanService {

  constructor(
    private readonly playerService: PlayerService
  ){}

  async addMemberToClan(playerReceiverId: number, joinMemberDTO: JoinMember){
    const playerReceiverPromise = this.playerService.findOnePlayer(playerReceiverId);
    const playerSenderPromise = this.playerService.findOnePlayer(joinMemberDTO.senderMemberId)

    const [playerReceiver, playerSender] = await Promise.all([playerReceiverPromise, playerSenderPromise])

    if(!playerReceiver) throw CustomError.notFound("Player Receiver not found")
    if(!playerSender) throw CustomError.notFound("Player Sender not found")
    
    const allowedRoles = [ClanMemberRole.MASTER, ClanMemberRole.OFFICER, ClanMemberRole.SUBOFFICER]
    
    if(!allowedRoles.includes(playerSender.clanMembers[0].role)){
      throw CustomError.badRequest("You don't have permission to join this clan")
    }
    
    const clanMember = new ClanMember();
    clanMember.player = playerReceiver;
    clanMember.clan = playerSender.clanMembers[0].clan;

    try {
      return await clanMember.save()
    } catch (error) {
      throw CustomError.internalServer("Something went wrong")
    }
  }

}