import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoggedUser, UserFiles } from '../../types';
import { APIRoute, AppRoute, UserRole } from '../../consts';
import { saveTokens } from '../../services/token';
import { redirectToRoute } from '../actions';
import {
  getRegisterData,
} from '../../utils/user-form-data';
import { AsyncThunkConfig } from './async-thunk-config';

export const checkAuthAction = createAsyncThunk<
  LoggedUser,
  undefined,
  AsyncThunkConfig
>('auth/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<LoggedUser>(APIRoute.CheckAuth);
  return data;
});

export const loginAction = createAsyncThunk<
  LoggedUser,
  undefined,
  AsyncThunkConfig
>('auth/login', async (_arg, { getState, dispatch, extra: api }) => {
  const { email, password } = getState().USER_FORM;
  const { data } = await api.post<LoggedUser>(APIRoute.Login, {
    email,
    password,
  });
  const { accessToken, refreshToken } = data;
  saveTokens(accessToken, refreshToken);
  dispatch(
    redirectToRoute(
      data.role === UserRole.Default ? AppRoute.Main : AppRoute.Account,
    ),
  );
  return data;
});

export const registerAction = createAsyncThunk<
  LoggedUser,
  UserFiles,
  AsyncThunkConfig
>('auth/register', async (files, { getState, extra: api }) => {
  const formData = getRegisterData(getState(), files.avatar);
  const { data } = await api.post<LoggedUser>(APIRoute.Register, formData);
  const { accessToken, refreshToken } = data;
  saveTokens(accessToken, refreshToken);
  return data;
});
