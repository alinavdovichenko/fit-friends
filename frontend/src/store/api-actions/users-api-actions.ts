import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CoachInfo,
  FriendshipStatus,
  FullUser,
  SubscriptionStatus,
  UsersWithPagination,
  TrainingsWithPagination,
} from '../../types';
import { APIRoute } from '../../consts';
import { getAllUsersQuery } from '../../utils/query';
import { AsyncThunkConfig } from './async-thunk-config';

export const getAllUsersAction = createAsyncThunk<
  UsersWithPagination,
  undefined,
  AsyncThunkConfig
>('users/all-users', async (_arg, { getState, extra: api }) => {
  const params = getAllUsersQuery(getState());
  const { data } = await api.get<UsersWithPagination>(APIRoute.Users, {
    params,
  });
  return data;
});

export const getUserAction = createAsyncThunk<
  FullUser,
  string,
  AsyncThunkConfig
>('users/user', async (userId, { extra: api }) => {
  const { data } = await api.get<FullUser>(`${APIRoute.Users}/${userId}`);
  const { data: friendshipStatus } = await api.get<FriendshipStatus>(
    `${APIRoute.Friends}/${userId}`,
  );
  return {
    ...data,
    ...friendshipStatus,
  };
});

export const getCoachDataAction = createAsyncThunk<
  CoachInfo,
  undefined,
  AsyncThunkConfig
>('users/coach', async (_arg, { getState, extra: api }) => {
  const coachId = getState().USER_INFO.id;
  const { data: subscriptionStatus } = await api.get<SubscriptionStatus>(
    `${APIRoute.CheckSubscription}/${coachId}`,
  );
  const { data: trainingsData } = await api.get<TrainingsWithPagination>(
    `${APIRoute.TrainingsFromCoach}/${coachId}`,
  );
  return {
    ...subscriptionStatus,
    trainings: trainingsData.trainings,
  };
});
