import { User } from "../database/entities/User";
import { userRepositories } from "../database/entities/UsersRepositories";

export default class ListUserService {
  async execute(): Promise<User[]> {
    const users = await userRepositories.find();

    return users;
  }
}
