import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Query,
    Req,
    UseGuards,
  } from '@nestjs/common';
  import { ApiResponse, ApiTags } from '@nestjs/swagger';
  import { UserRdo, JwtAuthGuard, RoleClientGuard } from '@project/authentication';
  import { ClientRoomService } from './client-room.service';
  import { RequestWithTokenPayload } from '@project/core';
  import { fillObject } from '@project/shared/helpers';
  import { BalanceRdo } from '@project/balance';
  import { OrderRdo, CreateOrderDto } from '@project/order';
  import { TrainingRdo, TrainingRepository } from '@project/training';
  import { TrainingQuery } from '@project/trainer-room';

  @ApiTags('client-room')
  @Controller('client')
  export class ClientRoomController {
    constructor(
      private readonly trainingRepository: TrainingRepository,
      private readonly clientRoomService: ClientRoomService,
    ) {}

    @ApiResponse({
      type: UserRdo,
      status: HttpStatus.OK,
      description: 'The friend  has been successfully added.',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Post('friend/:id')
    public async addFriend(
      @Param('id') friendId: number,
      @Req() { user: payload }: RequestWithTokenPayload,
    ) {
      const userFriend = await this.clientRoomService.addFriend(
        payload,
        friendId,
      );
      return fillObject(UserRdo, userFriend);
    }

    @ApiResponse({
      type: UserRdo,
      status: HttpStatus.OK,
      description: 'The friend  has been successfully deleted.',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Delete('friend/:id')
    public async deleteFriend(
      @Param('id') id: number,
      @Req() { user: payload }: RequestWithTokenPayload,
    ) {
      return await this.clientRoomService.deleteFriend(payload.sub, id);
    }

    @ApiResponse({
      type: UserRdo,
      status: HttpStatus.OK,
      description: 'Get client friends',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Get('friends')
    async findFriends(@Req() { user: payload }: RequestWithTokenPayload) {
      const friends = await this.clientRoomService.getFriends(payload.sub);

      return fillObject(UserRdo, friends);
    }

    @ApiResponse({
      type: TrainingRdo,
      status: HttpStatus.OK,
      description: 'Find training recomended for user',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Get('/recomended')
    public async fileRecomended(@Query() query: TrainingQuery) {
      const trainings =
        await this.clientRoomService.getTrainingsRecomended(query);

      return fillObject(TrainingRdo, trainings);
    }

    @ApiResponse({
      type: UserRdo,
      status: HttpStatus.OK,
      description: 'Users training successfully received.',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Get('balance')
    public async getBalance(@Req() { user: payload }: RequestWithTokenPayload) {
      const userBalance = await this.clientRoomService.showAllBalance(
        payload.sub,
      );
      return fillObject(BalanceRdo, userBalance);
    }

    @ApiResponse({
      type: UserRdo,
      status: HttpStatus.OK,
      description: 'Users training successfully received.',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Get('balance-training/:id')
    public async checkTraining(
      @Param('id') id: number,
      @Req() { user: payload }: RequestWithTokenPayload,
    ) {
      const userBalance = await this.clientRoomService.showBalance(
        payload.sub,
        id,
      );
      return fillObject(BalanceRdo, userBalance);
    }

    @ApiResponse({
      type: TrainingRdo,
      status: HttpStatus.OK,
      description: 'Show all training by balance',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Get('balance-trainings')
    public async getTrainingsBalance(
      @Req() { user: payload }: RequestWithTokenPayload,
    ) {
      const userTrainings = await this.clientRoomService.getAllTrainingsByBalance(
        payload.sub,
      );
      return fillObject(TrainingRdo, userTrainings);
    }

    @ApiResponse({
      status: HttpStatus.OK,
      description: 'Users training successfully used.',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Delete('training/:id')
    public async deleteTraining(
      @Param('id') trainingId: number,
      @Req() { user: payload }: RequestWithTokenPayload,
    ) {
      return await this.clientRoomService.spendTraining(payload.sub, trainingId);
    }

    @ApiResponse({
      type: OrderRdo,
      status: HttpStatus.OK,
      description: 'The training successfully ordered.',
    })
    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @Post('order')
    public async makeOrder(
      @Req() { user: payload }: RequestWithTokenPayload,
      @Body() dto: CreateOrderDto,
    ) {
      const newOrder = await this.clientRoomService.buyTrainings(
        payload.sub,
        dto,
      );
      return fillObject(OrderRdo, newOrder);
    }

    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @ApiResponse({
      type: Boolean,
      status: HttpStatus.OK,
      description: 'Subscribe to the trainer.',
    })
    @Post('/subscribe/:id')
    public async subscribe(
      @Param('id') trainerId: number,
      @Req() { user: payload }: RequestWithTokenPayload,
    ) {
      const { name, email } = payload;
      const data = await this.clientRoomService.subscribe({
        trainerId,
        name,
        email,
      });

      return data;
    }

    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @ApiResponse({
      type: Boolean,
      status: HttpStatus.OK,
      description: 'Check subscribe to the trainer.',
    })
    @Get('/check-subscribe/:id')
    public async checkSubscribe(
      @Param('id') trainerId: number,
      @Req() { user: payload }: RequestWithTokenPayload,
    ) {
      const { name, email } = payload;
      const data = await this.clientRoomService.checkSubscribe({
        trainerId,
        name,
        email,
      });

      return data;
    }

    @UseGuards(JwtAuthGuard, RoleClientGuard)
    @ApiResponse({
      type: Boolean,
      status: HttpStatus.OK,
      description: 'Get trainings of the trainer.',
    })
    @Get('/trainings/:id')
    public async getTrainerTrainings(
      @Query() query: TrainingQuery,
      @Param('id') trainerId: number,
    ) {
      const data = await this.trainingRepository.find(query, trainerId);

      return data;
    }
  }
