import { createSlice } from '@reduxjs/toolkit';
import { MainData } from '../../types';
import { NameSpace } from '../../consts';
import { getMainPageDataAction } from '../api-actions';

const initialState: MainData = {
  trainingsForUser: [],
  specialTrainings: [],
  popularTrainings: [],
  readyUsers: [],
  isDataLoading: false,
};

export const mainData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMainPageDataAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getMainPageDataAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(getMainPageDataAction.fulfilled, (state, action) => {
        state.trainingsForUser = action.payload.trainingsForUser;
        state.specialTrainings = action.payload.specialTrainings;
        state.popularTrainings = action.payload.popularTrainings;
        state.readyUsers = action.payload.readyUsers;
        state.isDataLoading = false;
      });
  },
});

