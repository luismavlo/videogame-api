




export class AddQuestPlayerDTO {
  private constructor(
    public readonly questId: number,
  ){}

 
  static create( object: { [key : string] : any } ): [string?, AddQuestPlayerDTO?] {
    
    const { questId } = object;

    if( !questId ) return ['Missing questId']
    return [undefined, new AddQuestPlayerDTO(questId)]
  }
}
