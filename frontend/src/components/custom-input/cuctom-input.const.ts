import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  getUserFormCaloriesPerDay,
  getUserFormCaloriesPerDayError,
  getUserFormCaloriesToLose,
  getUserFormCaloriesToLoseError,
  getUserFormEmail,
  getUserFormEmailError,
  getUserFormName,
  getUserFormNameError,
  getUserFormPassword,
  getUserFormPasswordError,
  getTrainingFormCalories,
  getTrainingFormCaloriesError,
  getTrainingFormPrice,
  getTrainingFormPriceError,
  getTrainingFormTitle,
  getTrainingFormTitleError,
  isUserFormDataSending,
  isTrainingFormDataSending,
  setCalories,
  setCaloriesPerDay,
  setCaloriesToLose,
  setEmail,
  setName,
  setPassword,
  setPrice,
  setTitle,
  setUserFormError,
  setTrainingFormError,
} from '../../store';
import { State } from '../../types';
import {
  validateCalories,
  validateEmail,
  validateName,
  validatePassword,
  validateTrainingPrice,
  validateTrainingTitle,
} from '../../utils/validation';

export enum CustomInputType {
  Name = 'name',
  Password = 'password',
  Email = 'email',
  CaloriesToLose = 'calories-to-lose',
  CaloriesPerDay = 'calories-per-day',
  TrainingTitle = 'training-title',
  TrainingCalories = 'training-calories',
  TrainingPrice = 'training-price',
}

enum StyleMode {
  TextRight = 'custom-input--with-text-right',
  TextLeft = 'custom-input--with-text-left',
}

enum InputSymbol {
  Calories = 'ккал',
  Price = '₽',
}

type CustomInputTypeDiff = {
  valueSelector: (state: State) => string;
  errorSelector: (state: State) => string | undefined;
  validationFunction: (value: string) => string | undefined;
  setValue: ActionCreatorWithPayload<string>;
  setError: (value: string | undefined) => {
    payload: [string, string | undefined];
    type: string;
  };
  formStatusSelector: (state: State) => boolean;
  fieldName: string;
  labelText?: string;
  fieldType?: string;
  styleMode?: StyleMode;
  inputSymbol?: InputSymbol;
};

type CustomInputTypeDiffs = {
  [type: string]: CustomInputTypeDiff;
};

export const CustomInputTypeDiffs: CustomInputTypeDiffs = {
  [CustomInputType.Name]: {
    valueSelector: getUserFormName,
    errorSelector: getUserFormNameError,
    validationFunction: validateName,
    setError: (value: string | undefined) =>
      setUserFormError(['name', value]),
    formStatusSelector: isUserFormDataSending,
    setValue: setName,
    fieldName: 'name',
    labelText: 'Имя',
  },
  [CustomInputType.Password]: {
    valueSelector: getUserFormPassword,
    errorSelector: getUserFormPasswordError,
    validationFunction: validatePassword,
    setError: (value: string | undefined) =>
      setUserFormError(['password', value]),
    formStatusSelector: isUserFormDataSending,
    setValue: setPassword,
    fieldName: 'password',
    labelText: 'Пароль',
    fieldType: 'password',
  },
  [CustomInputType.Email]: {
    valueSelector: getUserFormEmail,
    errorSelector: getUserFormEmailError,
    validationFunction: validateEmail,
    setError: (value: string | undefined) =>
      setUserFormError(['email', value]),
    formStatusSelector: isUserFormDataSending,
    setValue: setEmail,
    fieldName: 'email',
    labelText: 'E-mail',
  },
  [CustomInputType.CaloriesPerDay]: {
    valueSelector: getUserFormCaloriesPerDay,
    errorSelector: getUserFormCaloriesPerDayError,
    validationFunction: validateCalories,
    setError: (value: string | undefined) =>
      setUserFormError(['caloriesPerDay', value]),
    formStatusSelector: isUserFormDataSending,
    setValue: setCaloriesPerDay,
    fieldName: 'caloriesPerDay',
    fieldType: 'number',
    styleMode: StyleMode.TextRight,
    inputSymbol: InputSymbol.Calories,
  },
  [CustomInputType.CaloriesToLose]: {
    valueSelector: getUserFormCaloriesToLose,
    errorSelector: getUserFormCaloriesToLoseError,
    validationFunction: validateCalories,
    setError: (value: string | undefined) =>
      setUserFormError(['caloriesToLose', value]),
    formStatusSelector: isUserFormDataSending,
    setValue: setCaloriesToLose,
    fieldName: 'caloriesToLose',
    fieldType: 'number',
    styleMode: StyleMode.TextRight,
    inputSymbol: InputSymbol.Calories,
  },
  [CustomInputType.TrainingTitle]: {
    valueSelector: getTrainingFormTitle,
    errorSelector: getTrainingFormTitleError,
    validationFunction: validateTrainingTitle,
    setError: (value: string | undefined) =>
      setTrainingFormError(['title', value]),
    formStatusSelector: isTrainingFormDataSending,
    setValue: setTitle,
    fieldName: 'title',
  },
  [CustomInputType.TrainingCalories]: {
    valueSelector: getTrainingFormCalories,
    errorSelector: getTrainingFormCaloriesError,
    validationFunction: validateCalories,
    setError: (value: string | undefined) =>
      setTrainingFormError(['calories', value]),
    formStatusSelector: isTrainingFormDataSending,
    setValue: setCalories,
    fieldName: 'calories',
    labelText: 'Сколько калорий потратим',
    styleMode: StyleMode.TextRight,
    inputSymbol: InputSymbol.Calories,
  },
  [CustomInputType.TrainingPrice]: {
    valueSelector: getTrainingFormPrice,
    errorSelector: getTrainingFormPriceError,
    validationFunction: validateTrainingPrice,
    setError: (value: string | undefined) =>
      setTrainingFormError(['price', value]),
    formStatusSelector: isTrainingFormDataSending,
    setValue: setPrice,
    fieldName: 'price',
    fieldType: 'number',
    labelText: 'Стоимость тренировки',
    styleMode: StyleMode.TextRight,
    inputSymbol: InputSymbol.Price,
  },
};
