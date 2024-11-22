import Joi from 'joi';
import {
        FeedbackTextLength,
        TrainingTitleLength,
        PriceValue,
        TrainingDescriptionLength
 } from '../consts';

export const REQUIRED_INPUT_MESSAGE = 'Поле обязательно для заполнения';

type ValidationData = {
  birthDay: string;
  feedbackText: string;
  trainingTitle: string;
  trainingPrice: number;
  trainingDescription: string;
};

export const ValidationSchema = {
  birthDay: Joi.date()
    .less('now')
    .message('Некорректная дата рождения')
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  feedbackText: Joi.string()
    .min(FeedbackTextLength.Min)
    .message(
      `Рекомендуемая длина ${FeedbackTextLength.Min} - ${FeedbackTextLength.Max} символов`,
    )
    .max(FeedbackTextLength.Max)
    .message(
      `Рекомендуемая длина ${FeedbackTextLength.Min} - ${FeedbackTextLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  trainingTitle: Joi.string()
    .min(TrainingTitleLength.Min)
    .message(
      `Рекомендуемая длина ${TrainingTitleLength.Min} - ${TrainingTitleLength.Max} символов`,
    )
    .max(TrainingTitleLength.Max)
    .message(
      `Рекомендуемая длина ${TrainingTitleLength.Min} - ${TrainingTitleLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  trainingPrice: Joi.number()
    .integer()
    .message('Введите целое число')
    .min(PriceValue.Min)
    .message(`Минимальная цена: ${PriceValue.Min}`)
    .required()
    .messages({ 'number.base': REQUIRED_INPUT_MESSAGE }),
  trainingDescription: Joi.string()
    .min(TrainingDescriptionLength.Min)
    .message(
      `Рекомендуемая длина ${TrainingDescriptionLength.Min} - ${TrainingDescriptionLength.Max} символов`,
    )
    .max(TrainingDescriptionLength.Max)
    .message(
      `Рекомендуемая длина ${TrainingDescriptionLength.Min} - ${TrainingDescriptionLength.Max} символов`,
    )
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

export const validateFeedbackText = (value: unknown) =>
  validateProperty('feedbackText', value);

export const validateEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

export const validatePassword = (password: string): boolean =>
  /^[A-Z0-9А-ЯЁ_]{6,12}$/i.test(password);

export const validateName = (name: string): boolean =>
  /^[A-ZА-ЯЁ]{1,15}$/i.test(name);

export const validateTrainingTitle = (value: unknown) =>
  validateProperty('trainingTitle', value);

export const validateTrainingPrice = (value: unknown) =>
  validateProperty('trainingPrice', value);

export const validateTrainingDescription = (value: unknown) =>
  validateProperty('trainingDescription', value);


