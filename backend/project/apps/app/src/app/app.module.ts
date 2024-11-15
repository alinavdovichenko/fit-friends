import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountConfigModule } from '@project/account-config';
import { AuthenticationModule } from '@project/authentication';
import { TrainingModule } from '@project/training';
import { BalanceModule } from '@project/balance';

@Module({
  imports: [
    AuthenticationModule,
    AccountConfigModule,
    TrainingModule,
    BalanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
