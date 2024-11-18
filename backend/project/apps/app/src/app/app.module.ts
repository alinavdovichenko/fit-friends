import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountConfigModule } from '@project/account-config';
import { MailConfigModule } from '@project/mail';
import { AuthenticationModule } from '@project/authentication';
import { TrainingModule } from '@project/training';
import { BalanceModule } from '@project/balance';
import { FeedbackModule } from '@project/feedback';
import { PersonalOrderModule } from '@project/personal-order';
import { ClientRoomModule } from '@project/client-room';

@Module({
  imports: [
    AuthenticationModule,
    AccountConfigModule,
    TrainingModule,
    BalanceModule,
    FeedbackModule,
    PersonalOrderModule,
    MailConfigModule,
    ClientRoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
