const utility = require('../lib/utility');

class User {
  // assert.ok(params.email, 'Email is required');
  constructor(params) {
    this.email = params.email;
    this.createdAt = params.createdAt || new Date();
    this.status = params.status || 'pending';
    this.signInCount = params.signInCount || 0;
    this.lastLoginAt = params.lastLogin || new Date();
    this.currentLoginAt = params.currentLoginAt || new Date();
    this.currentSessionToken = params.currentSessionToken || null;
    this.reminderSentAt = params.reminderSentAt || null;
    this.reminderToken = params.reminderToken || null;
    this.authenticationToken = params.authenticationToken || utility.randomString(18);
  }
}

module.exports = User;
