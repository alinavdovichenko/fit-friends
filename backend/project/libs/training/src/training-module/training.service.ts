import { Injectable } from '@nestjs/common';
import { TrainingRepository } from './training.repository';
import { TrainingEntity } from './training.entity';
import { PrismaClientService } from '@project/models';

@Injectable()
export class TrainingService {
  constructor(
    private readonly trainingRepository: TrainingRepository,
    readonly client: PrismaClientService,
  ) {}

  public async getTraining(id: string): Promise<TrainingEntity> {
    return this.trainingRepository.findById(id);
  }
}


