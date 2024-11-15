import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountConfigModule } from '@project/account-config';
import { AuthenticationModule } from '@project/authentication';
import { TrainingModule } from '@project/training';
import { BalanceModule } from '@project/balance';
import { FeedbackModule } from '@project/feedback';
import { PersonalOrderModule } from '@project/personal-order';

@Module({
  imports: [
    AuthenticationModule,
    AccountConfigModule,
    TrainingModule,
    BalanceModule,
    FeedbackModule,
    PersonalOrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
