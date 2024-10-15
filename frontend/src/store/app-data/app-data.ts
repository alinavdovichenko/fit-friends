import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppData, Route } from '../../types';
import { NameSpace, PopupKey, AuthorizationStatus } from '../../consts';

const initialState: AppData = {
  authStatus: AuthorizationStatus.Unknown,
  userRole: undefined,
  userId: '',
  notifications: [],
  activeTraining: undefined,
  activePage: undefined,
  activePopup: undefined,
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    setActiveTraining: (state, action: PayloadAction<string | undefined>) => {
      state.activeTraining = action.payload;
    },
    setActiveRoute: (state, action: PayloadAction<Route | undefined>) => {
      state.activePage = action.payload;
    },
    setActivePopup: (state, action: PayloadAction<PopupKey | undefined>) => {
      state.activePopup = action.payload;
    },
  },
});

