import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomQuoteService {
  async getAll() {
    const quotes = [];
    await fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => quotes.push(...data));
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
}
