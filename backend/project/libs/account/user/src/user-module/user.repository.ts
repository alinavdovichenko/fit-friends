import { BaseMemoryRepository } from '@project/shared/data-access';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserFactory } from './user.factory';

@Injectable()
export class UserRepository extends BaseMemoryRepository<UserEntity> {
  constructor(entityFactory: UserFactory) {
    super(entityFactory);
  }
}
