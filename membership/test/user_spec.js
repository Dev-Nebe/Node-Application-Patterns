const assert = require('assert');
const should = require('should');
const User = require('../models/user');

describe('User', () => {
  describe('defaults', () => {
    let user = {};

    before(() => {
      user = new User({ email: 'rob@tekpub.com' });
    });

    it('email is rob@tekpub.com', () => {
      user.email.should.equal('rob@tekpub.com');
    });
    it('has an authentication token', () => {
      user.authenticationToken.should.not.equal(undefined);
    });
    it('has a pending status', () => {
      user.status.should.equal('pending');
    });
    it('has a created date', () => {
      user.createdAt.should.not.equal(undefined);
    });
    it('has a signInCount of 0', () => {
      user.signInCount.should.not.equal(undefined);
    });
    it('has lastLogin', () => {
      user.lastLoginAt.should.not.equal(undefined);
    });
    it('has currentLogin', () => {
      user.currentLoginAt.should.not.equal(undefined);
    });
    // it('has a sessionToken');
    // it('has a reminderToken');
    // it('has a reminder sent date');
  });
});
