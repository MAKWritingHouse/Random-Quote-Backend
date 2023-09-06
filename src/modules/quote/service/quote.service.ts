import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  async getAll() {
    const quotes = await fetch('https://type.fit/api/quotes').then((res) =>
      res.json(),
    );
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}
