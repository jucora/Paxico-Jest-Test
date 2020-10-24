// 2. Test results with jest validate integers, strings and types on resuly

describe('users', () => {
  const users = require('./users');
  it('should be defined', () => {
    expect(users).toBeDefined();
  });
  // ID VALIDATIONS
  test('id should be a number', () => {
    expect(typeof users[0].id).toBe('number');
  });
  test('id should be an integer', () => {
    expect(Number.isInteger(users[0].id)).toBeTruthy();
  });
  // FIRST NAME, LAST NAME, EMAIL VALIDATIONS
  test('first name should be a string', () => {
    expect(typeof users[0].first_name).toBe('string');
  });
  test('last name should be a string', () => {
    expect(typeof users[0].last_name).toBe('string');
  });
  test('email should be a string', () => {
    expect(typeof users[0].email).toBe('string');
  });
});
