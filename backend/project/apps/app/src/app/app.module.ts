import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountConfigModule } from '@project/account-config';
import { TrainingModule } from '@project/training';
import { UserModule } from '@project/user';
import { AuthenticationModule } from '@project/authentication';

@Module({
  imports: [
    AuthenticationModule,
    UserModule,
    TrainingModule,
    AccountConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
