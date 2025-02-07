import AppDataSource from '@shared/typeorm/data-source';
import UserTokens from '../entities/UserTokens';

export const userTokensRepositories = AppDataSource.getRepository(
  UserTokens,
).extend({
  async findByToken(token: string): Promise<UserTokens | null> {
    const userToken = await this.findOneBy({ token });

    return userToken;
  },

  async generate(user_id: number): Promise<UserTokens | undefined> {
    const userToken = this.create({
      user_id,
    });

    await this.save(userToken);

    return userToken;
  },
});
