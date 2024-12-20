import {
  IsISO8601,
  IsString,
  IsArray,
  IsOptional,
  Length,
  IsEnum,
  IsBoolean,
  IsIn,
  IsNumber,
  Min,
  Max,
  ValidateNested,
  ArrayMaxSize,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  MAXIMUM_TRAINING_TYPES_CHOICE,
  MetroStation,
  UserSex,
  UserNameLength,
  UserLevel,
  TrainingType,
  TrainingDuration,
  CaloriesOfDay,
  TrainerMeritLength,
  DtoValidationMessage
} from '@project/core';
import { Type } from 'class-transformer';

class ClientDto {
  @ApiProperty({
    description: 'Training duration',
    example: '10-30 мин',
    enum: TrainingDuration,
    required: true,
  })
  @IsEnum(TrainingDuration)
  @IsOptional()
  public timeOfTraining?: TrainingDuration;

  @ApiProperty({
    description: 'Calories to lose',
    example: 2000,
    minimum: CaloriesOfDay.Min,
    maximum: CaloriesOfDay.Max,
    required: true,
  })
  @IsNumber()
  @IsOptional()
  @Min(CaloriesOfDay.Min)
  @Max(CaloriesOfDay.Max)
  public caloryLosingPlanTotal?: number;

  @ApiProperty({
    description: 'Calories to lose per day',
    example: 2000,
    minimum: CaloriesOfDay.Min,
    maximum: CaloriesOfDay.Max,
    required: true,
  })
  @IsNumber()
  @IsOptional()
  @Min(CaloriesOfDay.Min)
  @Max(CaloriesOfDay.Max)
  public caloryLosingPlanDaily?: number;

  @ApiProperty({
    description: 'User readiness for personal training',
    example: true,
    required: true,
  })
  @IsOptional()
  @IsBoolean()
  public isReady?: boolean;
}

class TrainerDto {
  @ApiProperty({
    description: 'Trainer certificate',
    example: 'certificate.pdf',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public certificates?: string[];

  @ApiProperty({
    description: 'Trainer merits',
    example: 'В прошлом году меня выбрали лучшим тренером года!',
    minLength: TrainerMeritLength.Min,
    maxLength: TrainerMeritLength.Max,
  })
  @IsOptional()
  @IsString()
  @Length(TrainerMeritLength.Min, TrainerMeritLength.Max, {
    message: DtoValidationMessage.name.meritsLengthNotValid,
  })
  public merits?: string;

  @ApiProperty({
    description: 'User readiness for personal training',
    example: true,
    required: true,
  })
  @IsBoolean()
  @IsOptional()
  public isPersonalTraining?: boolean;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'Alina',
    minLength: UserNameLength.Min,
    maxLength: UserNameLength.Max,
  })
  @IsOptional()
  @IsString()
  @Length(UserNameLength.Min, UserNameLength.Max, {
    message: DtoValidationMessage.name.length,
  })
  public name?: string;

  @ApiProperty({
    description: 'User gender',
    example: 'мужской',
    enum: UserSex,
  })
  @IsOptional()
  @IsEnum(UserSex)
  public sex?: UserSex;

  @ApiProperty({
    description: 'The nearest metro station to the place of training',
    example: 'Пионерская',
    enum: MetroStation,
  })
  @IsOptional()
  @IsEnum(MetroStation)
  public location?: MetroStation;

  @ApiProperty({
    description: 'User birth date',
    example: '2000-01-01T00:00:00.000Z',
  })
  @IsOptional()
  @IsISO8601()
  public birthDate?: Date;

  @ApiProperty({
    description: 'User avatar',
    example: 'avatar.jpg',
  })
  @IsOptional()
  @IsString()
  public avatar?: string;

  @ApiProperty({
    description: 'User level',
    example: 'Любитель',
    enum: UserLevel,
  })
  @IsOptional()
  @IsEnum(UserLevel)
  public level?: UserLevel;

  @ApiProperty({
    description: 'Training type',
    example: 'Кроссфит',
  })
  @IsOptional()
  @ArrayMaxSize(MAXIMUM_TRAINING_TYPES_CHOICE)
  @IsIn(['Йога', 'Бег', 'Бокс', 'Стрейчинг', 'Кроссфит', 'Аэробика', 'Пилатес'])
  public trainingType?: TrainingType[];

  @ApiProperty({
    description: 'Trainer readiness marker for personal training',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  public isPersonalTraining?: boolean;

  @ApiProperty({})
  @ValidateNested()
  @Type(() => ClientDto)
  @IsOptional()
  public client?: ClientDto;

  @ApiProperty({})
  @ValidateNested()
  @Type(() => TrainerDto)
  @IsOptional()
  public trainer?: TrainerDto;
}
