import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import {
  appData,
  mainData,
  userForm,
  userData,
  balancesList,
  catalogData,
  usersList,
  userInfo,
  trainingForm,
  trainingInfo,
  trainingsList,
  ordersList,
  orderForm

} from './index';

export const rootReducer = combineReducers({
  [NameSpace.AppData]: appData.reducer,
  [NameSpace.MainData]: mainData.reducer,
  [NameSpace.UserForm]: userForm.reducer,
  [NameSpace.UserData]: userData.reducer,
  [NameSpace.BalancesList]: balancesList.reducer,
  [NameSpace.CatalogData]: catalogData.reducer,
  [NameSpace.UsersList]: usersList.reducer,
  [NameSpace.UserInfo]: userInfo.reducer,
  [NameSpace.TrainingForm]: trainingForm.reducer,
  [NameSpace.TrainingInfo]: trainingInfo.reducer,
  [NameSpace.TrainingsList]: trainingsList.reducer,
  [NameSpace.OrdersList]: ordersList.reducer,
  [NameSpace.OrderForm]: orderForm.reducer,

});
