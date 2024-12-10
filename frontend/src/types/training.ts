import { TrainingType } from '../consts';
import { User } from './user';
import { FileData } from './file-data';

export type Training = {
  id: string;
  title: string;
  backgroundImage: string;
  type: TrainingType;
  calories: number;
  description: string;
  price: number;
  rating: number;
};

export type FullTraining = Training & {
  coach: User;
  video: FileData;
  balance: null | number;
  comments: Comment[];
}

export type TrainingBalance = {
  training: Training;
  count: number;
};

export type TrainingBalanceStatus = {
  count: number | null;
};

