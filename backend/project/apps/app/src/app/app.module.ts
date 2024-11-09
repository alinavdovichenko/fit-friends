import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from '@project/authentication';
import applicationConfig from '../../config/app.config';

const ENV_FILE_PATH = 'apps/app/app.env';

@Module({
  imports: [
    AuthenticationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [applicationConfig],
      envFilePath: ENV_FILE_PATH,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
