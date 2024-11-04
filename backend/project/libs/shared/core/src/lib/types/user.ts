import { UserRole } from './user-role';
import { MetroStation } from './metro-station';
import { UserSex } from './user-sex';
import { UserLevel } from './user-level';
import { TrainingType } from './training-type';
import { TrainingRequest } from './training-request';
import { TrainingDuration} from './training-duration'

export type User = {
  userId: string;
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
  trainingRequest?: TrainingRequest;

  client?: Client | null;
  trainer?: Trainer | null;
};

export type Client = {
  id?: number;
  userId?: number;
  timeOfTraining?: string;
  caloryLosingPlanTotal?: number;
  caloryLosingPlanDaily?: number;
  isReady?: boolean;
}

export type Trainer = {
  id?: number;
  userId?: number;
  certificate?: string[];
  merits?: string;
  isPersonalTraining?: boolean;
}
