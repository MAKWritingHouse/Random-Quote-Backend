import { Controller, Get } from '@nestjs/common';
import { RandomQuoteProvider } from '../provider/random-quote.provider';

@Controller('random-quote')
export class RandomQuoteController {
  constructor(private provider: RandomQuoteProvider) {}

  @Get()
  getAll() {
    return this.provider.getAll();
  }
}
