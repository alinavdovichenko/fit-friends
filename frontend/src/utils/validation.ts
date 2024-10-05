import Joi from 'joi';

export const REQUIRED_INPUT_MESSAGE = 'Поле обязательно для заполнения';

type ValidationData = {
  birthDay: string;
};

export const ValidationSchema = {
  birthDay: Joi.date()
    .less('now')
    .message('Некорректная дата рождения')
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
};

const validateProperty = (
  propertyName: keyof ValidationData,
  value: unknown,
): string | undefined =>
  ValidationSchema[propertyName].validate(value).error?.message;

export const validateBirthDay = (value: unknown) =>
  validateProperty('birthDay', value);

export const validateEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

export const validatePassword = (password: string): boolean =>
  /^[A-Z0-9А-ЯЁ_]{6,12}$/i.test(password);

export const validateName = (name: string): boolean =>
  /^[A-ZА-ЯЁ]{1,15}$/i.test(name);
