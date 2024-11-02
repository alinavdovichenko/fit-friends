import { AuthUser, EntityFactory } from '@project/core';
import { UserEntity } from './user.entity';

export class UserFactory implements EntityFactory<UserEntity> {
  public create(entityPlainData: AuthUser): UserEntity {
    return new UserEntity(entityPlainData);
  }
}
