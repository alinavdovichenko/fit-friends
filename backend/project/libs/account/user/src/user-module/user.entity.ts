import { Entity } from '@project/core';
import { compare, genSalt, hash } from 'bcrypt';
import { StorableEntity,
  FullUser,
  UserRole,
  UserSex,
  MetroStation,
  UserLevel,
  TrainingType,
  TrainingRequest,
  TrainingDuration
} from '@project/core';

const SALT_ROUNDS = 10;

export class UserEntity extends Entity implements StorableEntity<FullUser> {
  public name: string;
  public avatar?: string;
  public role: UserRole;
  public sex: UserSex;
  public dateOfBirth: Date;
  public description?: string;
  public location: MetroStation;
  public backgroundImage?: string;
  public level: UserLevel;
  public trainingTypes: TrainingType[];
  public trainingRequest?: TrainingRequest;
  public isReady: boolean;
  public email: string;
  public passwordHash: string;
  public certificates?: string[];
  public achievements?: string;
  public caloriesToLose?: number;
  public caloriesPerDay?: number;
  public timeForTraining?: TrainingDuration;

  constructor(user?: FullUser) {
    super();
    this.populate(user);
  }

  public populate(user?: FullUser): void {
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
    this.trainingRequest = user.trainingRequest;

    this.email = user.email;
    this.passwordHash = user.passwordHash;
    this.isReady = user.isReady;
    this.certificates = user.certificates ?? [];
    this.achievements = user.achievements ?? '';
    this.caloriesToLose = user.caloriesToLose ?? 0;
    this.caloriesPerDay = user.caloriesPerDay ?? 0;
    this.timeForTraining = user.timeForTraining;
  }

  public toPOJO(): FullUser {
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
      trainingRequest: this.trainingRequest,
      isReady: this.isReady,

      email: this.email,
      passwordHash: this.passwordHash,
      certificates: this.certificates,
      achievements: this.achievements,
      caloriesToLose: this.caloriesToLose,
      caloriesPerDay: this.caloriesPerDay,
      timeForTraining: this.timeForTraining
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

  static fromObject(data: FullUser): UserEntity {
    return new UserEntity(data);
  }
}
