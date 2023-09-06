import { Test, TestingModule } from '@nestjs/testing';
import { QuoteProvider } from './quote.provider';

describe('Quote', () => {
  let provider: QuoteProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteProvider],
    }).compile();

    provider = module.get<QuoteProvider>(QuoteProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
