import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { TrainingType } from '../../shared/core/src/lib/types/training-type';
import { TrainingDuration } from '../../shared/core/src/lib/types/training-duration';
import { TrainingSexFor } from '../../shared/core/src/lib/types/training-sex-for';
import { UserLevel } from '../../shared/core/src/lib/types/user-level';

const mockUsersId = [
  '6d308040-06a2-4162-bea6-2398e9976520',
  '6d308040-06a2-4162-bea6-2398e9976521',
  '6d308040-06a2-4162-bea6-2398e9976522',
  '6d308040-06a2-4162-bea6-2398e9976523',
  '6d308040-06a2-4162-bea6-2398e9976524'
];

const mockTrainingId = [
  '6d308040-06a2-4162-bea6-2398e9976540',
  '6d308040-06a2-4162-bea6-2398e9976541',
  '6d308040-06a2-4162-bea6-2398e9976542',
  '6d308040-06a2-4162-bea6-2398e9976543',
  '6d308040-06a2-4162-bea6-2398e9976544'
];

function randomInt (a = 1, b = 0) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1))
};

function getRandomElement <T>(list: T[]): T {
  const randomindex = randomInt(0, list.length - 1);
  return list[randomindex];
};

const mockComments = [
  {
    userId: getRandomElement(mockUsersId),
    trainingId: getRandomElement(mockTrainingId),
    message: 'Первый комментарий',
    rating: 1
  },
  {
    userId: getRandomElement(mockUsersId),
    trainingId: getRandomElement(mockTrainingId),
    rating: 2,
    message: 'Еще один новый комментарий',
  },
  {
    userId: getRandomElement(mockUsersId),
    trainingId: getRandomElement(mockTrainingId),
    rating: 3,
    message: 'Не придумал лучший комментарий, поэтому оставлю просто этот текст',
  },
  {
    userId: getRandomElement(mockUsersId),
    trainingId: getRandomElement(mockTrainingId),
    rating: 4,
    message: 'Здесь могла быть ваша реклама',
  },
  {
    userId: getRandomElement(mockUsersId),
    trainingId: getRandomElement(mockTrainingId),
    rating: 5,
    message: 'Лучший пост',
  },
];

const mockTrainings = mockTrainingId.map((id) => {
  const randomNumber = randomInt(0, mockComments.length);
  const userId = getRandomElement(mockUsersId);
  const type = getRandomElement(Object.keys(TrainingType));
  const level = getRandomElement(Object.keys(UserLevel));
  const duration = getRandomElement(Object.keys(TrainingDuration));
  const userSex = getRandomElement(Object.keys(TrainingSexFor));
  return {
      id: id,
      title: faker.lorem.word(2),
      backgroundImage: faker.image.avatar(),
      level,
      type,
      duration,
      price: faker.number.int({ min: 0, max: 10000 }),
      calories: faker.number.int({ min: 100, max: 2000 }),
      createdAt: new Date(),
      description: faker.lorem.paragraph(4),
      userSex,
      video: faker.helpers.arrayElement([
        'running.mov',
        'boxing.mov',
        'yoga.mov',
        'swimming.mov',
        'jogging.mov',
      ]) as string,
      rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
      coachId: userId,
      isSpecial: faker.helpers.arrayElement([true, false]),
      comments: mockComments.slice(0, randomNumber),
  }
})

async function seedDb(prismaClient: PrismaClient) {
  for (const training of mockTrainings) {
    await prismaClient.training.upsert({
      where: { id: training.id },
      update: {},
      create: {
        id: training.id,
        title: training.title,
        backgroundImage: training.backgroundImage,
        level: training.level,
        type: training.type,
        createdAt: training.createdAt,
        duration: training.duration,
        userSex: training.userSex,
        calories: training.calories,
        description: training.description,
        rating: training.rating,
        video: training.video,
        coachId: training.coachId,
        isSpecial: training.isSpecial,
        comments: training.comments ? {
          create: training.comments
        } : undefined,
      }
    })
  }
  console.info('🤘️ Database was filled');
}

async function bootstrap() {
  const prismaClient = new PrismaClient();

  try {
    await seedDb(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();
