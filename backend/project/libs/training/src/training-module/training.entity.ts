import { Entity } from '@project/core';
import {
  StorableEntity,
  Training,
} from '@project/core';
import { UserEntity } from '@project/user';

export class TrainingEntity extends Entity implements StorableEntity<Training> {
  public title: string;
  public backgroundImage: string;
  public level: string;
  public type: string;
  public duration: string;
  public price: number;
  public calories: number;
  public description: string;
  public userSex: string;
  public video: string;
  public coachId: string;
  public coach?: UserEntity;
  public isSpecial: boolean;
  public rating: number;

  constructor(training?: Training) {
    super();
    this.populate(training);
  }

  public toPOJO() {
    return {
      id: this.id,
      title: this.title,
      backgroundImage: this.backgroundImage,
      level: this.level,
      type: this.type,
      duration: this.duration,
      price: this.price,
      calories: this.calories,
      description: this.description,
      userSex: this.userSex,
      video: this.video,
      coachId: this.coachId,
      coach: this.coach ? this.coach.toPOJO() : undefined,
      isSpecial: this.isSpecial,
      rating: this.rating,
    };
  }

  public populate(data: Training): void {
    if (!data) {
      return;
    }

    this.id = data.id ?? undefined;
    this.title = data.title;
    this.backgroundImage = data.backgroundImage;
    this.level = data.level;
    this.type = data.type;
    this.duration = data.duration;
    this.price = data.price;
    this.calories = data.calories;
    this.description = data.description;
    this.userSex = data.userSex;
    this.video = data.video;
    this.coachId = data.coachId ?? undefined;
    this.coach = data.coach ? UserEntity.fromObject(data.coach) : undefined;
    this.isSpecial = data.isSpecial;
    this.rating = data.rating;
  }

  static fromObject(data: Training): TrainingEntity {
    return new TrainingEntity(data);
  }
}
