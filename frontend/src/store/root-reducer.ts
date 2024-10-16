import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import {
  appData,
  mainData,
  userForm
} from './index';

export const rootReducer = combineReducers({
  [NameSpace.AppData]: appData.reducer,
  [NameSpace.MainData]: mainData.reducer,
  [NameSpace.UserForm]: userForm.reducer,
});
