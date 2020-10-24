describe('operations', () => {
  const operations = require('./operations');
  it('should perform addition operation', () => {
    expect(operations.add(3, 2)).toBe(5);
  });

  it('should perform subtraction operation', () => {
    expect(operations.sub(3, 2)).toBe(1);
  });

  it('should perform subtraction operation', () => {
    expect(operations.mul(3, 2)).toBe(6);
  });

  it('should perform division operation', () => {
    expect(operations.div(3, 2)).toBe(1.5);
  });
});
