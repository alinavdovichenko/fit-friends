import {
  validateFeedbackText,
} from '../../utils/validation';

export enum TextAreaInputType {
  FeedbackText = 'feedback-text',
}

type TextAreaInputTypeDiff = {
  styleClass?: string;
  validationFunction: (value: string) => string | undefined;
  fieldName: string;
  labelText?: string;
};

type TextAreaInputTypeDiffs = {
  [TypeTextAreaInputType: string]: TextAreaInputTypeDiff;
};

export const TextAreaInputTypeDiffs: TextAreaInputTypeDiffs = {
  [TextAreaInputType.FeedbackText]: {
    validationFunction: validateFeedbackText,
    fieldName: 'text',
  },
};
