


export class AddItemToIventory {
  private constructor(
    public readonly quantity: number,
    public readonly itemId?: number,
    public readonly resourceId?: number,
  ){}

 
  static create( object: { [key : string] : any } ): [string?, AddItemToIventory?] {

    const { itemId, quantity, resourceId } = object;

    if(!quantity) return ['Missing quantity']
    if(!itemId && !resourceId) return ['Missing itemId or resourceId']

    return [undefined, new AddItemToIventory(quantity, itemId, resourceId)]
  }
}
