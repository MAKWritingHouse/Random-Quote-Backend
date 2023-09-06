import { Module } from '@nestjs/common';
import { QuoteController } from './controller/quote.controller';
import { QuoteProvider } from './provider/quote.provider';
import { QuoteService } from './service/quote.service';

@Module({
  controllers: [QuoteController],
  providers: [QuoteProvider, QuoteService],
})
export class QuoteModule {}
