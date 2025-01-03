import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../types';
import { MetroStation, NameSpace, UserLevel, UserRole } from '../../consts';
import {
  addUserToFriendsAction,
  getCoachDataAction,
  getUserAction,
  removeUserFromFriendsAction,
  subscribeToCoachAction,
  unsubscribeFromCoachAction,
} from '../api-actions';

const initialState: UserInfo = {
  id: '',
  name: '',
  location: MetroStation.Petrogadskaya,
  role: UserRole.Default,
  isReady: false,
  description: '',
  trainingTypes: [],
  level: UserLevel.Amateur,
  isFriend: false,
  images: [],
  certificates: [],
  trainings: [],
  subscriptionStatus: false,
  isDataLoading: false,
  isCoachInfoActual: true,
  isTrainingsLoading: false,
  hasError: false,
};

export const userInfo = createSlice({
  name: NameSpace.UserInfo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserAction.pending, (state) => {
        state.isDataLoading = true;
        state.hasError = false;
      })
      .addCase(getUserAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(getUserAction.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.location = action.payload.location;
        state.role = action.payload.role;
        state.isReady = action.payload.isReady;
        state.description = action.payload.description;
        state.trainingTypes = action.payload.trainingTypes;
        state.level = action.payload.level;
        state.isFriend = action.payload.isFriend;
        state.images = [action.payload.backgroundImage];
        if (action.payload.certificates) {
          state.certificates = action.payload.certificates;
        }
        if (action.payload.role === UserRole.Coach) {
          state.isCoachInfoActual = false;
        }
        state.isDataLoading = false;
        state.hasError = false;
      })
      .addCase(getCoachDataAction.pending, (state) => {
        state.isTrainingsLoading = true;
      })
      .addCase(getCoachDataAction.rejected, (state) => {
        state.isCoachInfoActual = true;
        state.isTrainingsLoading = false;
      })
      .addCase(getCoachDataAction.fulfilled, (state, action) => {
        state.subscriptionStatus = action.payload.subscriptionStatus;
        state.trainings = action.payload.trainings;
        state.isCoachInfoActual = true;
        state.isTrainingsLoading = false;
      })
      .addCase(addUserToFriendsAction.fulfilled, (state) => {
        state.isFriend = true;
      })
      .addCase(removeUserFromFriendsAction.fulfilled, (state) => {
        state.isFriend = false;
      })
      .addCase(subscribeToCoachAction.fulfilled, (state) => {
        state.subscriptionStatus = true;
      })
      .addCase(unsubscribeFromCoachAction.fulfilled, (state) => {
        state.subscriptionStatus = false;
      });
  },
});
