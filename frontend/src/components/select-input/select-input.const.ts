import {
  MetroStation
} from '../../consts';
import lodash from 'lodash';

export enum SelectInputType {
  Location = 'location',
}

type SelectInputTypeDiff = {
  optionsArray: string[];
  labelText: string;
  labelFunction: (value: string) => string;
};

type SelectInputTypeDiffs = {
  [type: string]: SelectInputTypeDiff;
};

export const SelectInputTypeDiffs: SelectInputTypeDiffs = {
  [SelectInputType.Location]: {
    optionsArray: Object.values(MetroStation),
    labelText: 'Локация',
    labelFunction: (value) => `ст. м. ${lodash.capitalize(value)}`,
  },
};
