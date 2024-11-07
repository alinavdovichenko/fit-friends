import { MetroStation,
  UserRole,
  UserSex,
  UserNameLength,
  UserPasswordLength,
  DtoValidationMessage,
  UserLevel,
  TrainingType,
  TrainingDescriptionLength,
  TrainingDuration
} from '@project/core';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsEnum,
  Length,
  IsOptional,
  IsISO8601,
  Matches,
  IsArray,
  ArrayNotEmpty,
  ArrayMaxSize,
  IsBoolean,
  IsNumber
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'Alina',
    required: true,
    minLength: UserNameLength.Min,
    maxLength: UserNameLength.Max,
  })
  @IsString()
  @Length(UserNameLength.Min, UserNameLength.Max, {
    message: DtoValidationMessage.name.length,
  })
  @Matches(/[a-zа-яё\s]+/i)
  public name: string;

  @ApiProperty({
    description: 'User avatar',
    example: 'my-avatar.png',
  })
  @IsOptional()
  @IsString()
  public avatar?: string;

  @ApiPropertyOptional({
    description: 'User birth date',
    example: '1996-09-17',
  })
  @IsISO8601()
  @IsOptional()
  @Expose()
  public dateOfBirth?: Date;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.ru',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEmail({}, { message: DtoValidationMessage.email.invalidFormat })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '1234567',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(UserPasswordLength.Min, UserPasswordLength.Max, {
    message: DtoValidationMessage.password.length,
  })
  @Expose()
  public password: string;

  @ApiProperty({
    description: 'User role',
    example: 'пользователь',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEnum(UserRole, { message: DtoValidationMessage.role.invalidFormat })
  @Expose()
  public role: UserRole;

  @ApiProperty({
    description: 'User sex',
    example: 'мужской',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEnum(UserSex, { message: DtoValidationMessage.sex.invalidFormat })
  @Expose()
  public sex: UserSex;

  @ApiProperty({
    description: 'User location - metro station',
    example: 'Пионерская',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsEnum(MetroStation, {
    message: DtoValidationMessage.location.invalidFormat,
  })
  @Expose()
  public location: MetroStation;

  @ApiProperty({
    description: 'User description',
    example: 'Я собираюсь стать лучшим в этом сфере, когда-нибудь.',
    minLength: TrainingDescriptionLength.Min,
    maxLength: TrainingDescriptionLength.Max,
    required: true,
  })
  @IsString()
  @IsOptional()
  @Length(TrainingDescriptionLength.Min, TrainingDescriptionLength.Max, {
    message: DtoValidationMessage.trainingDescription.length,
  })
  public description?: string;

  @ApiProperty({
    description: 'User level',
    example: 'любитель',
    enum: UserLevel,
    required: true,
  })
  @IsEnum(UserLevel)
  @IsOptional()
  public level?: UserLevel;

  @ApiProperty({
    description: 'Training type',
    example: 'кроссфит',
    required: true,
  })
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMaxSize(3)
  @IsOptional()
  @IsEnum(TrainingType, { each: true })
  public trainingTypes?: TrainingType[];

  @ApiProperty({
    description: 'Ready flag',
    example: 'true',
  })
  @IsOptional()
  @IsBoolean()
  public isReady?: boolean;

  @ApiProperty({
    description: 'Ready flag',
    example: 'true',
  })
  @IsOptional()
  @IsBoolean()
  public certificates?: boolean;

  @ApiProperty({
    description: 'Achievements',
    example: 'Raised two Olympians.',
  })
  @IsOptional()
  @IsString()
  public achievements?: string;

  @ApiProperty({
    description: 'Number of calories to spend per day',
    example: '1200',
  })
  @IsOptional()
  @IsNumber()
  public caloriesPerDay?: number;

  @ApiProperty({
    description: 'Number of calories to lose',
    example: '1200',
  })
  @IsOptional()
  @IsNumber()
  public caloriesToLose?: number;

  @ApiProperty({
    description: 'Time for training',
    example: '30-50',
  })
  @IsOptional()
  @IsEnum(TrainingDuration, { each: true })
  public timeForTraining?: TrainingDuration;
}
