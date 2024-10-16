import { store } from '../store/index';
import {
  AuthorizationStatus,
  PopupKey,
  UserRole,
  TrainingType
} from '../consts';
import { Route } from './route';
import { Training, User } from '../types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppData = {
  authStatus: AuthorizationStatus;
  userRole: UserRole | undefined;
  userId: string;
  notifications: Notification[];
  activeTraining: string | undefined;
  activePage: Route | undefined;
  activePopup: PopupKey | undefined;
};

export type MainData = {
  trainingsForUser: Training[];
  specialTrainings: Training[];
  popularTrainings: Training[];
  readyUsers: User[];
  isDataLoading: boolean;
};

export type UserForm = {
  email: string;
  password: string;
  name: string;
  sex: string;
  dateOfBirth: string;
  role: UserRole;
  location: string | undefined;
  avatar: string | undefined;
  level: string;
  status: boolean;
  trainingTypes: TrainingType[];
  timeForTraining: string;
  caloriesToLose: string;
  caloriesPerDay: string;
  certificatesAmount: number;
  achievements: string;
  description: string;
  validationErrors: {
    email: string | undefined;
    password: string | undefined;
    name: string | undefined;
    sex: string | undefined;
    dateOfBirth: string | undefined;
    location: string | undefined;
    avatar: string | undefined;
    level: string | undefined;
    trainingTypes: string | undefined;
    caloriesToLose: string | undefined;
    caloriesPerDay: string | undefined;
    certificatesAmount: string | undefined;
    achievements: string | undefined;
    description: string | undefined;
  };
  isSending: boolean;
};
