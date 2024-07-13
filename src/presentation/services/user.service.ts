import { User } from '../../data';
import { CustomError } from '../../domain';

export class UserService {


  async findeOneUser (id: number) {
    const user = await User.findOne({
      where: {
        id
      },
      relations: ['players'],
    })

    if (!user) throw CustomError.notFound("User not found")

    return user;
  }

}