import { Injectable } from '@nestjs/common';
import { Training, EntityFactory } from '@project/core';
import { TrainingEntity } from './training.entity';

@Injectable()
export class TrainingFactory implements EntityFactory<TrainingEntity> {
  public create(entityPlainData: Training): TrainingEntity {
    return new TrainingEntity(entityPlainData);
  }
}
