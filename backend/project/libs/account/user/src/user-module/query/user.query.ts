import {
  DefaultUsersQuery,
  UserLevel,
  MetroStation,
  UserRole,
  TrainingType,
} from '@project/core';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UserQuery {
  @IsNumber()
  @Max(DefaultUsersQuery.maxLimit)
  @Min(DefaultUsersQuery.minLimit)
  @Transform(({ value }) => Number(value) ?? DefaultUsersQuery.maxLimit)
  @IsOptional()
  public limit?: number = DefaultUsersQuery.maxLimit;

  @IsIn([DefaultUsersQuery.sortDesc, DefaultUsersQuery.sortAsc])
  @Transform(({ value }) =>
    value === 'asc' ? DefaultUsersQuery.sortAsc : DefaultUsersQuery.sortDesc,
  )
  @IsOptional()
  public sortDirection?:
    | DefaultUsersQuery.sortDesc
    | DefaultUsersQuery.sortAsc = DefaultUsersQuery.sortDesc;

  @IsPositive()
  @Transform(({ value }) => +value)
  @IsOptional()
  public page?: number;

  @IsOptional()
  @IsEnum(MetroStation, { each: true })
  @Transform(({ value }) => value.split(',').map((item: string) => item))
  public locations?: string[];

  @IsOptional()
  @IsString()
  @IsEnum(UserRole, { each: true })
  public role?: string;

  @IsOptional()
  @IsEnum(UserLevel, { each: true })
  public level?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(TrainingType, { each: true })
  @Transform(({ value }) => value.split(',').map((item: string) => item))
  public typesOfTraining?: string[];

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  public isReady?: boolean;
}
