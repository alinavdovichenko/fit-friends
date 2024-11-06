import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { TrainingType } from '../../shared/core/src/lib/types/training-type';
import { TrainingDuration } from '../../shared/core/src/lib/types/training-duration';
import { TrainingSexFor } from '../../shared/core/src/lib/types/training-sex-for';
import { UserLevel } from '../../shared/core/src/lib/types/user-level';
import { UserRole } from '../../shared/core/src/lib/types/user-role';
import { UserSex } from '../../shared/core/src/lib/types/user-sex';
import { MetroStation } from '../../shared/core/src/lib/types/metro-station';

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

const mockUsers = mockUsersId.map((id) => {
  const level = getRandomElement(Object.keys(UserLevel));
  const role = getRandomElement(Object.keys(UserRole));
  const location = getRandomElement(Object.keys(MetroStation));
  const sex = getRandomElement(Object.keys(UserSex));
  const timeForTraining = getRandomElement(Object.keys(TrainingDuration));
  return {
      id: id,
      name: faker.internet.userName(),
      avatar: faker.image.avatar(),
      role,
      email: faker.internet.email(),
      backgroundImage: faker.image.avatar(),
      sex,
      dateOfBirth: faker.date.birthdate(),
      createdAt: new Date(),
      description: faker.lorem.paragraph(4),
      location,
      level,
      trainingTypes: faker.helpers.arrayElements(
        ['бокс', 'аэробика', 'силовые', 'стрейчинг', 'фитнес', 'йога', 'бег', 'кроссфит', 'пилатес'],
        { min: 1, max: 3 },
      ),
      passwordHash: faker.internet.password(),
      isReady: faker.helpers.arrayElement([true, false]),
      certificates: faker.helpers.arrayElements(
        [
          'sertificate1.pdf',
          'sertificate2.pdf',
          'sertificate3.pdf',
        ],
        { min: 1, max: 3 },
      ),
      achievements: faker.lorem.paragraph(1),
      caloriesToLose: faker.number.int({
        min: 1000,
        max: 5000,
      }),
      caloriesPerDay: faker.number.int({
        min: 1000,
        max: 5000,
      }),
      timeForTraining
  }
})

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
  for (const user of mockUsers) {
    await prismaClient.user.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        name: user.name,
        avatar: user.avatar,
        role: user.role,
        email: user.email,
        backgroundImage: user.backgroundImage,
        sex: user.sex,
        dateOfBirth: user.dateOfBirth,
        createdAt: user.createdAt,
        description: user.description,
        location: user.location,
        level: user.level,
        trainingTypes: user.trainingTypes,
        passwordHash: user.passwordHash,
        isReady: user.isReady,
        certificates: user.certificates,
        achievements: user.achievements,
        caloriesToLose: user.caloriesToLose,
        caloriesPerDay: user.caloriesPerDay,
        timeForTraining: user.timeForTraining
      }
    })
  }

  for (const training of mockTrainings) {
    await prismaClient.training.upsert({
      where: { trainingId: training.id },
      update: {},
      create: {
        trainingId: training.id,
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
