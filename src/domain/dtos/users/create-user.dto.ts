

export class CreateUserDTO {
  private constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly password: string
  ){}

 
  static create( object: { [key : string] : any } ): [string?, CreateUserDTO?] {
    const { email, password, username } = object;

    if( !username ) return ['Missing username']
    if( !email ) return ['Missing email']
    if( !password ) return ['Missing password']

    return [undefined, new CreateUserDTO(username, email, password)]
  }
}
