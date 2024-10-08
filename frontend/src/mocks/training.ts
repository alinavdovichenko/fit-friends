import { Training } from '../types/training';
import { TrainingType } from '../consts';

export const trainings: Training[] = [
  {
    id: '1',
    title: 'crossfit',
    backgroundImage: 'img/content/thumbnails/preview-03.jpg',
    type: TrainingType.Crossfit,
    calories: 400,
    rating: 4,
    description: 'Горячие предложения на тренировки на кроссфите',
    price: 1600,
  },
  {
    id: '2',
    title: 'power',
    backgroundImage: 'img/content/thumbnails/preview-02.jpg',
    type: TrainingType.Crossfit,
    calories: 400,
    rating: 4,
    description: 'Горячие предложения на тренировки на фитболе',
    price: 1600,
  },
  {
    id: '3',
    title: 'boxing',
    backgroundImage: 'img/content/thumbnails/preview-01.jpg',
    type: TrainingType.Crossfit,
    calories: 400,
    rating: 4,
    description: 'Горячие предложения на тренировки на фитболе',
    price: 1600,
  },
  {
    id: '4',
    title: 'Fitball',
    backgroundImage: 'img/content/thumbnails/preview-03.jpg',
    type: TrainingType.Crossfit,
    calories: 400,
    rating: 4,
    description: 'Горячие предложения на тренировки на фитболе',
    price: 1600,
  },
];

export const specialTrainings: Training[] = [
  {
    id: '1',
    title: 'Fitball',
    backgroundImage: 'img/content/promo-1.png',
    type: TrainingType.Crossfit,
    calories: 400,
    rating: 4,
    description: 'Горячие предложения на тренировки на фитболе',
    price: 1600,
  },
  {
    id: '2',
    title: 'Fleksbend',
    backgroundImage: 'img/content/promo-2.png',
    type: TrainingType.Crossfit,
    calories: 400,
    rating: 4,
    description: 'Горячие предложения на тренировки с резинкой для фитнеса',
    price: 2400,
  },
  {
    id: '3',
    title: 'Full Body Stretch',
    backgroundImage: 'img/content/promo-3.png',
    type: TrainingType.Crossfit,
    calories: 400,
    rating: 4,
    description: 'Горячие предложения на комплекс упражнений на растяжку всего тела для новичков',
    price: 1800,
  },
];
