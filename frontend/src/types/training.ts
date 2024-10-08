import { TrainingType } from '../consts';

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

