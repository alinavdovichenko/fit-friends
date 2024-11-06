
import { UserLevel } from './user-level';
import { User } from './user';
import { TrainingSexFor } from './training-sex-for';
import { TrainingType } from './training-type';
import { TrainingDuration } from './training-duration';

export type Training = {
  id?: string;
  title: string;
  backgroundImage: string;
  level: UserLevel;
  type: TrainingType;
  duration: TrainingDuration;
  price: number;
  calories: number;
  description: string;
  userSex: TrainingSexFor;
  video: string;
  coachId: string;
  coach?: User;
  isSpecial: boolean;
  rating: number;
}
