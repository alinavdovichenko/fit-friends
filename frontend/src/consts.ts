import { Location } from './types/location';

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Register: '/register',
  Questionary: '/questionary',
  MyPurchases: '/my-purchases',
  Main: '/main',
  Account: '/account',
  TrainingCatalog: '/training-сatalog',
  CardUser: '/card-user',
} as const;

export enum PopupKey {
  Feedback = 'popup-feedback',
  Buy = 'popup-buy',
}

export const AvatarMaxSize = {
  ForHuman: '1 мегабайт',
  ToCheck: 8388608,
} as const;


export enum MetroStation {
  Petrogadskaya = 'Петроградская',
  Pionerskaya = 'Пионерская',
  Sportivnaya = 'Спортивная',
  Udelnaya = 'Удельная',
  Zvyozdnaya = 'Звёздная',
}

type MetroLocation = {
  [name in MetroStation]: Location;
};

export const MetroLocation: MetroLocation = {
  [MetroStation.Petrogadskaya]: {
    latitude: 59.966422177556346,
    longitude: 30.31126748292901,
  },
  [MetroStation.Pionerskaya]: {
    latitude: 60.00437727171317,
    longitude: 30.29614854464556,
  },
  [MetroStation.Sportivnaya]: {
    latitude: 59.948332787863144,
    longitude: 30.28381254926065,
  },
  [MetroStation.Udelnaya]: {
    latitude: 60.0180783488178,
    longitude: 30.318212639724226,
  },
  [MetroStation.Zvyozdnaya]: {
    latitude: 59.833000780098885,
    longitude: 30.351706821603226,
  },
} as const;

export const WORKOUT_TYPE_MAX_AMOUNT = 3;

export enum UserRole {
  Coach = 'тренер',
  Default = 'пользователь',
}

export enum UserSex {
  Male = 'мужской',
  Female = 'женский',
  Other = 'неважно',
}

export enum UserLevel {
  Beginner = 'новичок',
  Amateur = 'любитель',
  Pro = 'профессионал',
}

export enum PasswordLength {
  Min = 6,
  Max = 12,
}

export enum NameLength {
  Min = 1,
  Max = 15,
}

export enum CaloriesValue {
  Min = 1000,
  Max = 5000,
}

export enum CoachAchievementsLength {
  Min = 10,
  Max = 140,
}

export enum UserDescriptionLength {
  Min = 10,
  Max = 140,
}

export enum RequestStatus {
  Default = 'на рассмотрении',
  Rejected = 'отклонён',
  Accepted = 'принят',
}

export enum RequestStatusText {
  ForUser = 'Запрос на совместную тренировку',
  ForCoach = 'Запрос на персональную тренировку',
}

export enum UserStatus {
  Ready = 'Готов к тренировке',
  NotReady = 'Не готов к тренировке',
}

export const RoleInputLabel = {
  [UserRole.Default]: 'Я хочу тренироваться',
  [UserRole.Coach]: 'Я хочу тренировать',
} as const;

