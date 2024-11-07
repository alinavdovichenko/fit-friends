import { Injectable } from '@nestjs/common';
import { Training } from '@project/core';
import { BasePostgresRepository } from '@project/shared/data-access';
import { PrismaClientService } from '@project/models';
import { TrainingEntity } from './training.entity';
import { TrainingFactory } from './training.factory';

@Injectable()
export class TrainingRepository extends BasePostgresRepository<TrainingEntity, Training> {
  constructor(
    entityFactory: TrainingFactory,
    readonly client: PrismaClientService,
  ) {
    super(entityFactory, client)
  }

  public async create(entity: TrainingEntity,): Promise<Training> {
    const entityData = entity.toPOJO();
    return await this.client.training.create({
      data: {
        ...entityData,
      }
    });
  }

  public async findByTitle(title: string): Promise<Training | null> {
    return this.client.training.findFirst({
      where: {
        title,
      },
    });
  }
}
