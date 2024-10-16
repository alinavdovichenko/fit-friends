import { Location } from './types/location';

export const REQUIRED_INPUT_MESSAGE = 'Поле обязательно для заполнения';
export const BACKEND_URL = 'http://localhost:3000';
export const REQUEST_TIMEOUT = 5000;
export const STATIC_URL = `${BACKEND_URL}/static`;
export const SALE_PERCENT = 20;
export const IMAGE_PLACEHOLDER = 'https://placehold.co/600x600.png';

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Register: '/register',
  Questionary: '/questionary',
  MyPurchases: '/account/my-purchases',
  Orders: '/account/my-orders',
  Main: '/main',
  Account: '/account',
  TrainingCatalog: '/training-сatalog',
  CardUser: '/card-user',
  Trainings: '/trainings',
  Users: '/users',
} as const;

export enum PopupKey {
  Feedback = 'popup-feedback',
  Buy = 'popup-buy',
  DefaultPopup ='popup-default',
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

export const TRAINING_TYPE_MAX_AMOUNT = 3;

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

export enum TrainingType {
  Yoga = 'йога',
  Running = 'бег',
  Box = 'бокс',
  Stretching = 'стрейчинг',
  Crossfit = 'кроссфит',
  Aerobic = 'аэробика',
  Pilates = 'пилатес',
  Strength = 'силовые',
}

export enum TrainingDuration {
  Short = '10-30',
  Medium = '30-50',
  Long = '50-80',
  Extra = '80-100',
}

export enum TrainingSexFor {
  Male = 'мужчинам',
  Female = 'женщинам',
  All = 'всем',
}

export enum TrainingTitleLength {
  Min = 1,
  Max = 15,
}

export enum TrainingDescriptionLength {
  Min = 10,
  Max = 140,
}

export enum PriceValue {
  Min = 0,
  Max = 50000,
}

export enum RatingValue {
  Default = 0,
  Min = 1,
  Max = 5,
}

export enum FeedbackTextLength {
  Min = 10,
  Max = 140,
}

export enum NameSpace {
  AppData = 'APP_DATA',
  MainData = 'MAIN_DATA',
  UserForm = 'USER_FORM'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const APIRoute = {
  CheckAuth: '/auth/login',
  Login: '/auth/login',
  Register: '/auth/register'
} as const;


