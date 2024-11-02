import { UserRole } from './user-role';
import { MetroStation } from './metro-station';
import { UserSex } from './user-sex';
import { UserLevel } from './user-level';
import { TrainingType } from './training-type';
import { TrainingRequest } from './training-request';

export type User = {
  id: string;
  avatar?: string;
  name: string;
  role: UserRole;
  sex: UserSex;
  isReady: boolean;
  location: MetroStation;
  level: UserLevel;
  trainingTypes: TrainingType[];
  trainingRequest?: TrainingRequest;
  description?: string;
  images?: string[];
};
