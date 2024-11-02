import { Entity } from '@project/core';
import { genSalt, hash } from 'bcrypt';
import { StorableEntity, AuthUser, UserRole, UserSex, MetroStation, UserLevel, TrainingType, TrainingRequest} from '@project/core';

const SALT_ROUNDS = 10;

export class UserEntity extends Entity implements StorableEntity<AuthUser> {
  public avatar?: string;
  public name: string;
  public role: UserRole;
  public sex: UserSex;
  public isReady: boolean;
  public location: MetroStation;
  public level: UserLevel;
  public trainingTypes: TrainingType[];
  public trainingRequest?: TrainingRequest;
  public description?: string;
  public images?: string[];
  public email: string;
  public passwordHash: string;

  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if (! user) {
      return;
    }

    this.id = user.id ?? '';
    this.avatar = user.avatar;
    this.name = user.name;
    this.role = user.role;
    this.sex = user.sex;
    this.isReady = user.isReady;
    this.location = user.location;
    this.level = user.level;
    this.trainingTypes = user.trainingTypes;
    this.trainingRequest = user.trainingRequest;
    this.description = user.description;
    this.images = user.images ?? [];
    this.email = user.email;
    this.passwordHash = user.passwordHash;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      avatar: this.avatar,
      name: this.name,
      role: this.role,
      sex: this.sex,
      isReady: this.isReady,
      location: this.location,
      level: this.level,
      trainingTypes: this.trainingTypes,
      trainingRequest: this.trainingRequest,
      description: this.description,
      images: this.images,
      email: this.email,
      passwordHash: this.passwordHash,
    }
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }
}
