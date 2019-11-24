const Registration = require('../lib/registration');

describe('Registration', () => {
  describe('a valid application', () => {
    let regResult;
    beforeEach(() => {
      regResult = Registration.applyForMembership({ email: 'rob@tekpub.com' });
    });

    it('is successful', () => {
      regResult.success.should.equal(true);
    });
    it('creates a user');
    it('creates a log entry');
    it('sets the user\'s status to approved');
  });

  describe('an empty or null email', () => {
    it('is not successful');
    it('tells user that email is required');
  });

  describe('an empty or null password', () => {
    it('is not successful');
    it('tells the user that password is required');
  });

  describe('password and confrim mismatch', () => {
    it('is not successful');
    it('tells the user that passwords don\'t match');
  });

  describe('email already exists', () => {});

  // describe('a valid application', () => {});
});
