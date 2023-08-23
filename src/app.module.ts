import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomQuoteController } from './random-quote/controller/random-quote.controller';
import { ServiceService } from './random-quote/service/random-quote.service';
import { RandomQuoteProvider } from './random-quote/provider/random-quote.provider';

@Module({
  imports: [],
  controllers: [AppController, RandomQuoteController],
  providers: [AppService, RandomQuoteProvider, ServiceService],
})
export class AppModule {}
