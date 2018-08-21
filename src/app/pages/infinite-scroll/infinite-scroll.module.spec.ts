import { InfiniteScrollModule } from './infinite-scroll.module';

describe('InfiniteScrollModule', () => {
  let infiniteScrollModule: InfiniteScrollModule;

  beforeEach(() => {
    infiniteScrollModule = new InfiniteScrollModule();
  });

  it('should create an instance', () => {
    expect(infiniteScrollModule).toBeTruthy();
  });
});
