import { UserRole } from './user-role';
import { MetroStation } from './metro-station';
import { UserSex } from './user-sex';
import { UserLevel } from './user-level';
import { TrainingType } from './training-type';
import { TrainingRequest } from './training-request';
import { TrainingDuration } from './training-duration';

export type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  sex: UserSex;
  role: UserRole;
  dateOfBirth: Date;
  description?: string;
  location: MetroStation;
  backgroundImage?: string;

  level: UserLevel;
  trainingTypes: TrainingType[];
  isReady: boolean;
  trainingRequest?: TrainingRequest;
};

export interface CoachUser extends User {
  certificates?: string[];
  achievements?: string;
}

export interface DefaultUser extends User {
  caloriesToLose?: number;
  caloriesPerDay?: number;
  timeForTraining?: TrainingDuration;
}

export interface FullUser extends CoachUser, DefaultUser {
  passwordHash?: string;
}

export interface AuthUser extends FullUser {
  passwordHash: string;
}
