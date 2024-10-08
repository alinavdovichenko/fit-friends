import {
  MetroStation,
  RequestStatus,
  UserLevel,
  UserRole,
  UserSex,
  TrainingType,
} from '../consts';

export type AuthUser = {
  email: string;
  password: string;
};

export type WorkoutRequest = {
  id: string;
  status: RequestStatus;
};

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
  trainingRequest?: WorkoutRequest;
};
