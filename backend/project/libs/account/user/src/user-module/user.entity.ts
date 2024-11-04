import { Entity } from '@project/core';
import { compare, genSalt, hash } from 'bcrypt';
import { StorableEntity,
  AuthUser,
  UserRole,
  UserSex,
  MetroStation,
  UserLevel,
  TrainingType,
  TrainingRequest,
  Client,
  Trainer
} from '@project/core';

const SALT_ROUNDS = 10;

export class UserEntity extends Entity implements StorableEntity<AuthUser> {
  public name: string;
  public avatar?: string;
  public role: UserRole;
  public sex: UserSex;
  public dateOfBirth: Date;
  public description?: string;
  public location: MetroStation;
  public backgroundImage: string;
  public level: UserLevel;
  public trainingTypes: TrainingType[];
  public client?: Client | null;
  public trainer?: Trainer | null;
  public trainingRequest?: TrainingRequest;
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
    this.dateOfBirth = user.dateOfBirth ?? new Date();
    this.description = user.description;
    this.location = user.location;
    this.backgroundImage = user.backgroundImage;
    this.level = user.level;
    this.trainingTypes = user.trainingTypes;
    this.client = user.client;
    this.trainer = user.trainer;
    this.trainingRequest = user.trainingRequest;

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
      dateOfBirth: this.dateOfBirth,
      description: this.description,
      location: this.location,
      backgroundImage: this.backgroundImage,
      level: this.level,
      trainingTypes: this.trainingTypes,
      client: this.client,
      trainer: this.trainer,
      trainingRequest: this.trainingRequest,

      email: this.email,
      passwordHash: this.passwordHash,
    }
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
