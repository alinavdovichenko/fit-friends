import { AppRoute } from '../../consts';
import { Route } from '../../types';

type AccountLink = {
  Icon: string;
  Route: Route;
  Label: string;
};

type AccountLinks = { [key: string]: AccountLink };

const AccountLinks: AccountLinks = {
  Workouts: {
    Icon: '#icon-flash',
    Route: AppRoute.CoachTrainings,
    Label: 'Мои тренировки',
  },
  CreateTraining: {
    Icon: '#icon-add',
    Route: AppRoute.CreateTraining,
    Label: 'Создать тренировку',
  },
  Friends: {
    Icon: '#icon-friends',
    Route: AppRoute.Friends,
    Label: 'Мои друзья',
  },
  Orders: {
    Icon: '#icon-bag',
    Route: AppRoute.Orders,
    Label: 'Мои заказы',
  },
  Balance: {
    Icon: '#icon-shopping-cart',
    Route: AppRoute.Balance,
    Label: 'Мои покупки',
  },
};

export const CoachLinks = [AccountLinks.Trainings, AccountLinks.CreateTraining, AccountLinks.Friends, AccountLinks.Orders];
export const CustomerLinks = [AccountLinks.Friends, AccountLinks.Balance];
