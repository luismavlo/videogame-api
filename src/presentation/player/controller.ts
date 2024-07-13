
import { Request, Response } from 'express';
import { CustomError } from '../../domain';


export class PlayerController {

  constructor(
    //TODO: Do Dependency injection if is required
  ){}

  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ message: error.message })
    }

    console.log(error)
    return res.status(500).json({ message: 'Something went very wrong! 🧨' })
  }

  createPlayer = async (req: Request, res: Response) => {
    
    const sessionUserId = 1;

    return res.status(200).json({ message: 'Hello World!' })
  }

  findOnePlayer = async (req: Request, res: Response) => {

    return res.status(200).json({ message: 'Hello World!' })
  }

}