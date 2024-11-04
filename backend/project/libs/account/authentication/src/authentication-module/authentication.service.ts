import dayjs from 'dayjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository, UserEntity } from '@project/user';
import { UserMessage, UserLevel } from '@project/core';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  public async register(dto: CreateUserDto) {
    const { email, name, sex, dateOfBirth, role, location, avatar, password } = dto;

    const userInfo = {
      email,
      name,
      avatar,
      sex,
      dateOfBirth: dateOfBirth ? dayjs(dateOfBirth).toDate() : undefined,
      role,
      location,
      backgroundImage: avatar,
      level: UserLevel.Amateur,
      trainingTypes: [],
      isReady: true,
      passwordHash: '',
      createdAt: new Date(),
    };

    const existUser = await this.userRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(UserMessage.Exists);
    }

    const userEntity = await new UserEntity(
      Object.assign(userInfo),
    ).setPassword(password);

    return this.userRepository
      .save(userEntity);
  }

  public async createUser(dto: CreateUserDto) {
    const { password, dateOfBirth } = dto;
    const newUser = {
      ...dto,
      passwordHash: '',
      createdAt: new Date(),
      dateOfBirth: dateOfBirth ? dayjs(dateOfBirth).toDate() : undefined,
    };

    const existUser = await this.userRepository.findByEmail(dto.email);

    if (existUser) {
      throw new ConflictException(UserMessage.Exists);
    }

    const userEntity = await new UserEntity(
      Object.assign(newUser),
    ).setPassword(password);

    return this.userRepository
      .save(userEntity);
  }
}
