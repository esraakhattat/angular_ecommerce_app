import { IsOutofStockPipe } from './is-outof-stock.pipe';

describe('IsOutofStockPipe', () => {
  it('create an instance', () => {
    const pipe = new IsOutofStockPipe();
    expect(pipe).toBeTruthy();
  });
});
