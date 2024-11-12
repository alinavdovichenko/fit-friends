import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountConfigModule } from '@project/account-config';
import { AuthenticationModule } from '@project/authentication';
import { TrainingModule } from '@project/training';

@Module({
  imports: [
    AuthenticationModule,
    AccountConfigModule,
    TrainingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
