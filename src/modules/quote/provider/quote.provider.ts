import { Injectable } from '@nestjs/common';
import { QuoteService } from '../service/quote.service';

@Injectable()
export class QuoteProvider {
  constructor(private service: QuoteService) {}

  getAll() {
    return this.service.getAll();
  }
}
