import { User } from '../types/user';
import {
  MetroStation,
  UserLevel,
  UserRole,
  UserSex,
  TrainingType,
} from '../consts';

export const users: User[] = [
  {
    id: '1',
    avatar: 'img/content/thumbnails/user-04.jpg',
    name: 'Диана',
    role: UserRole.Default,
    sex: UserSex.Female,
    isReady: true,
    location: MetroStation.Pionerskaya,
    level: UserLevel.Beginner,
    trainingTypes: [TrainingType.Pilates],
    description: 'Описание',
    images: ['img/content/user-card-photo1.jpg', 'img/content/user-card-photo2.jpg'],
  },
  {
    id: '2',
    avatar: 'img/content/thumbnails/user-05.jpg',
    name: 'Константин',
    role: UserRole.Default,
    sex: UserSex.Male,
    isReady: true,
    location: MetroStation.Sportivnaya,
    level: UserLevel.Pro,
    trainingTypes: [TrainingType.Strength],
    description: 'Описание',
    images: ['img/content/user-card-photo1.jpg', 'img/content/user-card-photo2.jpg'],
  },
  {
    id: '3',
    avatar: 'img/content/thumbnails/user-06.jpg',
    name: 'Иван',
    role: UserRole.Default,
    sex: UserSex.Male,
    isReady: true,
    location: MetroStation.Udelnaya,
    level: UserLevel.Beginner,
    trainingTypes: [TrainingType.Running],
    description: 'Описание',
    images: ['img/content/user-card-photo1.jpg', 'img/content/user-card-photo2.jpg'],
  },
  {
    id: '4',
    avatar: 'img/content/thumbnails/user-07.jpg',
    name: 'Яна',
    role: UserRole.Default,
    sex: UserSex.Female,
    isReady: true,
    location: MetroStation.Zvyozdnaya,
    level: UserLevel.Amateur,
    trainingTypes: [TrainingType.Pilates],
    description: 'Описание',
    images: ['img/content/user-card-photo1.jpg', 'img/content/user-card-photo2.jpg'],
  },
  {
    id: '5',
    avatar: 'img/content/thumbnails/user-03.jpg',
    name: 'Aнна',
    role: UserRole.Default,
    sex: UserSex.Female,
    isReady: true,
    location: MetroStation.Pionerskaya,
    level: UserLevel.Beginner,
    trainingTypes: [TrainingType.Pilates],
    description: 'Описание',
    images: ['img/content/user-card-photo1.jpg', 'img/content/user-card-photo2.jpg'],
  },
  {
    id: '6',
    avatar: 'img/content/thumbnails/user-02.jpg',
    name: 'Диана',
    role: UserRole.Default,
    sex: UserSex.Female,
    isReady: true,
    location: MetroStation.Pionerskaya,
    level: UserLevel.Beginner,
    trainingTypes: [TrainingType.Pilates],
    description: 'Описание',
    images: ['img/content/user-card-photo1.jpg', 'img/content/user-card-photo2.jpg'],
  }
];
