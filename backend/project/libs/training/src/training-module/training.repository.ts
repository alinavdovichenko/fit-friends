import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@project/models';
import { CrudRepository, Training } from '@project/core';
import { TrainingEntity } from './training.entity';

@Injectable()
export class TrainingRepository
  implements CrudRepository<TrainingEntity, number, Training>
{
  constructor(private readonly prisma: PrismaClientService) {}

  public async create(
    fitnessTrainingEntity: TrainingEntity,
  ): Promise<Training> {
    const entityData = fitnessTrainingEntity.toObject();
    return await this.prisma.training.create({
      data: {
        ...entityData,
        feedbacks: {
          connect: [],
        },
      },
      include: { feedbacks: true },
    });
  }

  public async findByTitle(title: string): Promise<Training | null> {
    return this.prisma.training.findFirst({
      where: {
        title,
      },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.training.delete({
      where: {
        id,
      },
      include: { feedbacks: true },
    });
  }

  public async findById(id: number): Promise<Training | null> {
    return this.prisma.training.findFirst({
      where: {
        id,
      },
      include: { feedbacks: true },
    });
  }

  public async findByTrainerId(trainerId: number): Promise<Training[] | null> {
    return this.prisma.training.findMany({
      where: {
        trainerId,
      },
    });
  }

  public async findByIdNotFeedback(id: number): Promise<Training | null> {
    return this.prisma.training.findFirst({
      where: {
        id,
      },
    });
  }

  public async update(
    id: number,
    trainingEntity: TrainingEntity,
  ): Promise<Training> {
    const entityData = trainingEntity.toObject();
    return await this.prisma.training.update({
      where: {
        id,
      },
      data: {
        ...entityData,
        feedbacks: {
          connect: trainingEntity.feedbacks.map(({ id }) => ({
            id,
          })),
        },
      },
    });
  }

  public async find(
    {
      limit,
      page,
      priceMin,
      priceMax,
      caloriesMin,
      caloriesMax,
      ratingMin,
      ratingMax,
      durations,
      levelOfUser,
      types,
    },
    trainerId: number,
  ): Promise<Training[] | null> {
    return await this.prisma.training.findMany({
      where: {
        AND: [
          { trainerId },
          { price: { gte: priceMin, lte: priceMax } },
          { caloriesQtt: { gte: caloriesMin, lte: caloriesMax } },
          { rating: { gte: ratingMin, lte: ratingMax } },
          { duration: { in: durations } },
          { levelOfUser },
          { typeOfTraining: { in: types } },
        ],
      },

      include: { feedbacks: true },
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public async findRecomended({
    limit,
    page,
    priceMin,
    priceMax,
    caloriesMin,
    caloriesMax,
    ratingMin,
    ratingMax,
    durations,
    levelOfUser,
    isPromo,
    priceSort,
    ratingSort,
  }): Promise<Training[] | null> {
    return await this.prisma.training.findMany({
      where: {
        AND: [
          { price: { gte: priceMin, lte: priceMax } },
          { caloriesQtt: { gte: caloriesMin, lte: caloriesMax } },
          { rating: { gte: ratingMin, lte: ratingMax } },
          { duration: { in: durations } },
          { levelOfUser },
          { isPromo },
        ],
      },
      orderBy: [
        ratingSort !== ''
          ? ratingSort === 'asc'
            ? { rating: 'asc' }
            : { rating: 'desc' }
          : { createdAt: 'desc' },
        priceSort !== ''
          ? priceSort === 'asc'
            ? { price: 'asc' }
            : { price: 'desc' }
          : { createdAt: 'desc' },
      ],
      include: { feedbacks: true },
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public async findForCatalog({
    limit,
    page,
    priceMin,
    priceMax,
    caloriesMin,
    caloriesMax,
    ratingMin,
    ratingMax,
    types,
    priceSort,
    ratingSort,
  }): Promise<Training[] | null> {
    return await this.prisma.training.findMany({
      where: {
        AND: [
          { price: { gte: priceMin, lte: priceMax } },
          { caloriesQtt: { gte: caloriesMin, lte: caloriesMax } },
          { rating: { gte: ratingMin, lte: ratingMax } },
          { typeOfTraining: { in: types } },
        ],
      },
      orderBy: [
        priceSort !== 'none'
          ? priceSort === 'asc'
            ? { price: 'asc' }
            : { price: 'desc' }
          : { createdAt: 'desc' },
        ratingSort !== 'none'
          ? ratingSort === 'asc'
            ? { rating: 'asc' }
            : { rating: 'desc' }
          : { createdAt: 'desc' },
      ],
      include: { feedbacks: true },
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public async findByTranerId(trainerId: number): Promise<Training[] | null> {
    return await this.prisma.training.findMany({
      where: { trainerId },
    });
  }

  public async findFromTrainer(trainerId: number): Promise<Training[] | null> {
    return await this.prisma.training.findMany({
      where: {
        trainerId,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
