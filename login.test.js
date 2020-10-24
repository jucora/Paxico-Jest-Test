describe('login', () => {
  const login = require('./login');
  const rules = {
    username: { minLength: 3, maxLength: 15 },
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    /*********+ PASSWORD REGEX RULES EXPLANATION *****************
        At least one upper case english letter
        At least one lower case English letter
        At least one digit
        At least one special character
        A minimum eight in length 
    *******************************************/
  };
  // VALID USERNAME TEST
  test('username should have a minimum length of 3 and maximun length of 15', () => {
    expect(
      login[0].username.length >= rules.username.minLength &&
        login[0].username.length <= rules.username.maxLength
    ).toBeTruthy();
  });

  // VALID PASSWORD TEST
  test('password should match password rules', () => {
    expect(rules.password.test(login[0].password)).toBeTruthy();
  });

  // INVALID USERNAME TEST
  test('username should be provided', () => {
    expect(
      login[1].username.length >= rules.username.minLength &&
        login[1].username.length <= rules.username.maxLength
    ).toBeFalsy();
  });

  test('password should match password rules', () => {
    expect(rules.password.test(login[1].password)).toBeFalsy();
  });
});
