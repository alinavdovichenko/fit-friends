import { User } from './user';

export type Training = {
  id?: string;
  title: string;
  backgroundImage: string;
  level: string;
  type: string;
  duration: string;
  price: number;
  calories: number;
  description: string;
  userSex: string;
  video: string;
  coachId: string;
  coach?: User;
  isSpecial: boolean;
  rating: number;
}
