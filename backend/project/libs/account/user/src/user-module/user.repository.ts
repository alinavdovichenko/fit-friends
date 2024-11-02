import { BaseMemoryRepository } from '@project/shared/data-access';

import { UserEntity } from './user.entity';
import { UserFactory } from './user.factory';

export class UserRepository extends BaseMemoryRepository<UserEntity> {
  constructor(entityFactory: UserFactory) {
    super(entityFactory);
  }
}
