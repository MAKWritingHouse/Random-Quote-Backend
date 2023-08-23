import { Injectable } from '@nestjs/common';
import { RandomQuoteService } from '../service/random-quote.service';

@Injectable()
export class RandomQuoteProvider {
  constructor(private service: RandomQuoteService) {}

  getAll() {
    return this.service.getAll();
  }
}
