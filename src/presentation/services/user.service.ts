import { bcryptAdapter } from '../../config/bcrypt.adapter';
import { JwtAdapter } from '../../config/jwt.adapter';
import { User } from '../../data';
import { CreateUserDTO, CustomError, LoginUserDTO } from '../../domain';

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

  async login (loginUserDTO: LoginUserDTO) {

    const { email, password, username } = loginUserDTO;
    
    const user = await User.findOne({
      where: [
        { email },
        { username }
      ]
    });
    if (!user) throw CustomError.unAuthorized("Invalid email or password")

    const isMatching = bcryptAdapter.compare(password, user.password)
    if (!isMatching) throw CustomError.unAuthorized("Invalid email or password")

    const token = await JwtAdapter.generateToken({ id: user.id })
    if (!token) throw CustomError.internalServer("Error while creating JWT");

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      }
    }
  }

  async register (createUserDTO: CreateUserDTO) {
    const { email, username } = createUserDTO;

    const existUser = await User.findOne({
      where: [
        { email },
        { username }
      ]
    });

    if (existUser) {
      if (existUser.email === email) {
        throw CustomError.badRequest("This email is already taken");
      }
      if (existUser.username === username) {
        throw CustomError.badRequest("This username is already taken");
      }
    }

    const user = new User();
    user.email = email;
    user.username = username;
    user.password = bcryptAdapter.hash(createUserDTO.password);

    try {
      return await user.save()
    } catch (error){
      throw CustomError.internalServer("Something went wrong")
    }
  }

  

}