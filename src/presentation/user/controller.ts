

import { Request, Response } from 'express';
import { CustomError } from '../../domain';
import { UserService } from '../services/user.service';

export class UserController {

  constructor(
    private readonly userService: UserService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ message: error.message })
    }

    console.log(error)
    return res.status(500).json({ message: 'Something went very wrong! 🧨' })
  }

  findOneUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    this.userService.findeOneUser(+id)
      .then(user => res.status(200).json(user))
      .catch(error => this.handleError(error, res))

    return res.status(200).json({ message: 'Hello World!' })
  }

}