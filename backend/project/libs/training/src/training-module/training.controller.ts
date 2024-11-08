import { Controller, Get, Param } from '@nestjs/common';
import { fillDto } from '@project/shared/helpers';
import { TrainingService } from './training.service';
import { TrainingRdo } from './rdo/training.rdo';

@Controller('trainings')
export class TrainingController {
  constructor(
    private readonly trainingService: TrainingService
  ) { }

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const postEntity = await this.trainingService.getTraining(id);
    return fillDto(TrainingRdo, postEntity.toPOJO());
  }
}
