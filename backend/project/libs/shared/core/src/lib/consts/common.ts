export const MAX_TRAININGS_TYPES = 3;

export const LIST_LIMIT = 50;

export const DEFAULT_PAGE = 1;

export const DEFAULT_RATING = 0;

export enum CaloriesValue {
  Min = 1000,
  Max = 5000,
}

export enum PriceValue {
  Min = 0,
}

export enum RatingValue {
  Min = 1,
  Max = 5,
}

export enum OrderCountValue {
  Min = 1,
  Max = 50,
}

export enum OrderQueryDefault {
  SortDirection = 'desc',
  Limit = 50,
}

export enum UserNameLength {
  Min = 1,
  Max = 15,
}

export enum UserPasswordLength {
  Min = 6,
  Max = 12,
}

export enum UserDescriptionLength {
  Min = 10,
  Max = 140,
}

export enum UserAchievementsLength {
  Min = 10,
  Max = 140,
}

export enum TrainingTitleLength {
  Min = 1,
  Max = 15,
}

export enum TrainingDescriptionLength {
  Min = 10,
  Max = 140,
}

export enum CommentTextLength {
  Min = 10,
  Max = 140,
}

export enum DefaultUsersQuery {
  maxLimit = 50,
  minLimit = 1,
  sortDesc = 'desc',
  sortAsc = 'asc',
}

export enum DefaultPorts {
  DefaultPort = 4000,
  DefaultPostgresPort = 5432,
  DefaultSmtpPort = 8025,
}

export enum DefaultTraining {
  Limit = 50,
  SortDirection = 'desc',
  Page = 1,
}
