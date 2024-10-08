import { Training } from '../types/training';
import { TrainingType } from '../consts';

export const trainingCards: Training[] = [
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
