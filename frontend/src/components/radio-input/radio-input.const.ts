import { UserLevel, UserSex } from '../../consts';

export enum RadioInputType {
  Level = 'level',
  Sex = 'sex',
}

enum StyleMode {
  Big = 'custom-toggle-radio--big',
}

type RadioInputTypeDiff = {
  optionsArray: string[];
  fieldName: string;
  styleMode?: StyleMode;
};

type RadioInputTypeDiffs = {
  [type: string]: RadioInputTypeDiff;
};

export const RadioInputTypeDiffs: RadioInputTypeDiffs = {
  [RadioInputType.Level]: {
    optionsArray: Object.values(UserLevel),
    fieldName: 'level',
    styleMode: StyleMode.Big,
  },
  [RadioInputType.Sex]: {
    optionsArray: Object.values(UserSex),
    fieldName: 'sex',
    styleMode: StyleMode.Big,
  },
};
