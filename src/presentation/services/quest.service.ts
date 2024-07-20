import { Quest, Quest_player } from '../../data';
import { AddQuestPlayerDTO, CustomError } from '../../domain';
import { PlayerService } from './player.service';


export class QuestService {

  constructor(
    private readonly playerService: PlayerService
  ){}

  async addQuestToPlayer( playerId: number, addQuestPlayerDTO: AddQuestPlayerDTO){
    const playerPromise =  this.playerService.findOnePlayer(playerId);
    const questPromise =  this.findOneQuestById(addQuestPlayerDTO.questId);

    const [player, quest] = await Promise.all([playerPromise, questPromise])

    const questPlayer = new Quest_player();
    questPlayer.player = player;
    questPlayer.quest = quest;

    try {
      return await questPlayer.save()
    } catch (error){
      throw CustomError.internalServer("Something went wrong")
    }
  }

  async findOneQuestById(id: number){
    const quest = await Quest.findOne({
      where: {
        id
      }
    })

    if (!quest) throw CustomError.notFound("Quest not found");

    return quest;
  }

}