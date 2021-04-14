import { getTotalPrice } from './getTotalPrice';

describe('Get Total Prince Function', () => {
  it('should return sum', () => {
    const product = [
      {
        price: 100,
        quantity: 2,
      },
      {
        price: 300,
        quantity: 1,
      },
    ];
    expect(getTotalPrice(product)).toBe(500);
  });
  it('should return 0', () => {
    expect(getTotalPrice([])).toBe(0);
  });
});
