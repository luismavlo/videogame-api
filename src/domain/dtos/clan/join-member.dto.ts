



export class JoinMember {
  private constructor(
    public readonly senderMemberId: number,
  ){}

 
  static create( object: { [key : string] : any } ): [string?, JoinMember?] {
    
    const { senderMemberId } = object;

    if( !senderMemberId ) return ['senderMemberId is required']

    return [undefined, new JoinMember(senderMemberId)]
  }
}
