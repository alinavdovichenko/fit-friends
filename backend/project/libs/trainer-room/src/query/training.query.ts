import {
  IsBoolean,
  IsEnum,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Transform } from 'class-transformer';
import {
  CaloriesOfDay,
  DefaultTraining,
  RatingValue,
  TrainingDuration,
  TrainingType,
  UserLevel,
} from '@project/core';

export class TrainingQuery {
  @IsNumber()
  @IsPositive()
  @Max(DefaultTraining.Limit)
  @Transform(({ value }) => +value || DefaultTraining.Limit)
  @IsOptional()
  public limit: number = DefaultTraining.Limit;

  @IsIn(['asc', 'desc', ''])
  @IsOptional()
  public priceSort: 'desc' | 'asc' | '' = DefaultTraining.SortDirection;

  @IsIn(['asc', 'desc', ''])
  @IsOptional()
  public ratingSort: 'desc' | 'asc' | '' = DefaultTraining.SortDirection;

  @IsOptional()
  @Transform(({ value }) => +value)
  public page: number = DefaultTraining.Page;

  @IsPositive()
  @Min(0)
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  public priceMin: number;

  @IsPositive()
  @Min(0)
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  public priceMax: number;

  @Min(CaloriesOfDay.Min)
  @Max(CaloriesOfDay.Max)
  @IsInt()
  @Transform(({ value }) => +value)
  @IsOptional()
  public caloriesMin: number;

  @Min(CaloriesOfDay.Min)
  @Max(CaloriesOfDay.Max)
  @IsInt()
  @Transform(({ value }) => +value)
  @IsOptional()
  public caloriesMax: number;

  @Min(RatingValue.Min)
  @Max(RatingValue.Max)
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  public ratingMin: number;

  @Min(RatingValue.Min)
  @Max(RatingValue.Max)
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  public ratingMax: number;

  @IsEnum(TrainingType, {
    each: true,
  })
  @Transform(({ value }) => value.split(',').map((item: string) => item))
  @IsOptional()
  public types: TrainingType[];

  @IsString()
  @IsOptional()
  public trainerId?: string;

  @IsEnum(TrainingDuration, {
    each: true,
  })
  @Transform(({ value }) => value.split(',').map((item: string) => item))
  @IsOptional()
  public durations: TrainingDuration[];

  @IsEnum(UserLevel)
  @IsOptional()
  public levelOfUser: UserLevel;

  @IsBoolean()
  @IsOptional()
  public isPromo: boolean;
}
