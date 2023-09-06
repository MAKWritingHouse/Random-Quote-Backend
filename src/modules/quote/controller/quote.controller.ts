import { Controller, Get } from '@nestjs/common';
import { QuoteProvider } from '../provider/quote.provider';

@Controller('quote')
export class QuoteController {
  constructor(private provider: QuoteProvider) {}

  @Get()
  getAll() {
    return this.provider.getAll();
  }
}
