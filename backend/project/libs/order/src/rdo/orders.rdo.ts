import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  TrainingSexFor,
  TrainingDuration,
  UserLevel,
  TrainingType,
} from '@project/core';

export class OrdersRdo {
  @ApiProperty({
    description: 'The uniq training ID',
    example: 123,
    required: true,
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'Training title',
    example: 'Crossfit',
    required: true,
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Training image',
    example: 'training.png',
    required: true,
  })
  @Expose()
  public backgroundPicture: string;

  @ApiProperty({
    description: 'Training level',
    example: 'Любитель',
    enum: UserLevel,
    required: true,
  })
  @Expose()
  public levelOfUser: UserLevel;

  @ApiProperty({
    description: 'Training type',
    example: 'Кроссфит',
    enum: TrainingType,
    required: true,
  })
  @Expose()
  public typeOfTraining: TrainingType[];

  @ApiProperty({
    description: 'Training duration',
    example: '10-30 мин',
    enum: TrainingDuration,
    required: true,
  })
  @Expose()
  public duration: TrainingDuration;

  @ApiProperty({
    description: 'User gender',
    example: '',
    enum: TrainingSexFor,
    required: true,
  })
  @Expose()
  public sex: TrainingSexFor;

  @ApiProperty({
    description: 'Calories to lose',
    example: 1000,
    required: true,
  })
  @Expose()
  public caloriesQtt!: number;

  @ApiProperty({
    description: 'Training descripion',
    example:
      'Сложный комплекс упражнений на отработку показателей в классическом стиле.',
    required: true,
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Training video',
    example: 'Crossfit.mp4',
    required: true,
  })
  @Expose()
  public video: string;

  @ApiProperty({
    description: 'Training price',
    example: 1234,
    required: true,
  })
  @Expose()
  public price!: number;

  @ApiProperty({
    description: 'Training average rating',
    example: 4.3,
    required: true,
  })
  @Expose()
  public rating: number;

  @ApiProperty({
    description: 'Trainer id',
    example: '12',
    required: true,
  })
  @Expose()
  public trainerId: number;

  @ApiProperty({
    description: 'Is special offer',
    example: true,
    required: true,
  })
  @Expose()
  public isPromo: boolean;

  @ApiProperty({
    description: 'Total quantity',
    example: 14808,
    required: true,
  })
  @Expose()
  public totalQuantity: number;

  @ApiProperty({
    description: 'Total price',
    example: 14808,
    required: true,
  })
  @Expose()
  public totalPrice: number;
}
