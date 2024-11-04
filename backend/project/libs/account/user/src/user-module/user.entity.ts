import { Entity } from '@project/core';
import { compare, genSalt, hash } from 'bcrypt';
import { StorableEntity, AuthUser, UserRole, UserSex, MetroStation, UserLevel, TrainingType, TrainingRequest, TrainingDuration} from '@project/core';

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
  public trainingDuration: TrainingDuration;
  public caloriesToLose: number;
  public caloriesToDay: number;
  public trainingRequest?: TrainingRequest;
  public email: string;
  public passwordHash: string;
  public isReady: boolean;

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
    this.trainingDuration = user.trainingDuration;
    this.caloriesToLose = user.caloriesToLose;
    this.caloriesToDay = user.caloriesToDay;
    this.trainingRequest = user.trainingRequest;

    this.email = user.email;
    this.passwordHash = user.passwordHash;
    this.isReady = user.isReady;
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
      trainingDuration: this.trainingDuration,
      caloriesToLose: this.caloriesToLose,
      caloriesToDay: this.caloriesToDay,
      trainingRequest: this.trainingRequest,

      email: this.email,
      passwordHash: this.passwordHash,
      isReady: this.isReady,
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
