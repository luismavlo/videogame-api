import { Resource } from '../../data';
import { CustomError } from '../../domain';


export class ResourceService {

  async findOneResourceById(id: number){
    const resource = await Resource.findOne({
      where: {
        id: id
      }
    })

    if (!resource) throw CustomError.notFound("Resource not found")

    return resource;
  }

}