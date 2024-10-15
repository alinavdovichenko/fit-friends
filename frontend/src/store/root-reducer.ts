import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import {
  appData,
  mainData,
} from './index';

export const rootReducer = combineReducers({
  [NameSpace.AppData]: appData.reducer,
  [NameSpace.MainData]: mainData.reducer,
});
