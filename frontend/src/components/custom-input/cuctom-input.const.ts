import { validateEmail, validatePassword, validateName } from '../../utils/validation';

export enum CustomInputType {
  Name = 'name',
  Password = 'password',
  Email = 'email'
}

export const CustomInputTypeDiffs = {
  [CustomInputType.Name]: {
    fieldName: 'name',
    labelText: 'Имя',
    fieldType: 'text',
    validationFunction: validateName,
  },
  [CustomInputType.Password]: {
    fieldName: 'password',
    labelText: 'Пароль',
    fieldType: 'password',
    validationFunction: validatePassword,
  },
  [CustomInputType.Email]: {
    fieldName: 'email',
    labelText: 'E-mail',
    fieldType: 'email',
    validationFunction: validateEmail,
  }
};
