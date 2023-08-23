import { Test, TestingModule } from '@nestjs/testing';
import { RandomQuoteProvider } from './random-quote.provider';

describe('RandomQuote', () => {
  let provider: RandomQuoteProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomQuoteProvider],
    }).compile();

    provider = module.get<RandomQuoteProvider>(RandomQuoteProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
