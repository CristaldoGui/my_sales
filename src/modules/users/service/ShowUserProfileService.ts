import AppError from "@shared/errors/AppError";
import { userRepositories } from "../database/repositories/UsersRepositories";
import { User } from "../database/entities/User";

interface IShowUserProfile {
  user_id: number;
}

export default class showUserProfileService{
  async execute({user_id}: IShowUserProfile): Promise<User> {
    const user = await userRepositories.findById(user_id);

    if(!user) throw new AppError("User not found", 404);

    return user;
  }
}
