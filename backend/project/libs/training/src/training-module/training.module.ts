import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

const HttpClient = {
  MaxRedirects: 5,
  Timeout: 3000
}
@Module({
  imports: [
    HttpModule.register({
      timeout: HttpClient.Timeout,
      maxRedirects: HttpClient.MaxRedirects,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class TrainingModule {}
