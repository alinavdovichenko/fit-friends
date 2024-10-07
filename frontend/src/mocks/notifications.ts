import { Notification } from '../types/notification';

export const notifications: Notification[] = [
  {
    id: '1',
    text: 'Катерина пригласила вас на тренировку',
    date: new Date('December 23, 2023 12:35:00'),
  },
  {
    id: '2',
    text: 'Никита отклонил приглашение на совместную тренировку',
    date: new Date('December 22, 2023 09:22:00'),
  },
  {
    id: '3',
    text: 'Татьяна добавила вас в друзья',
    date: new Date('December 18, 2023 18:50:00'),
  }
];
