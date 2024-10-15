import {
  AuthorizationStatus,
  PopupKey,
  UserRole,
} from '../consts';
import { Route } from './route';
import { Training, User } from '../types';

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
