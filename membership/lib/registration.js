const User = require('../models/user');
const Application = require('../models/application');

class RegResult {
  constructor() {
    this.success = false;
    this.message = null;
    this.user = null;
  }
}

const validateInputs = (app) => {
  if (!app.email && !app.password) {
    app.setInvalid('Email and password are required');
  } else if (app.password !== app.confirm) {
    app.setInvalid('Passwords do not match');
  } else {
    app.validate();
  }
};

exports.applyForMembership = (params) => {
  const regResult = new RegResult();
  const { app } = new Application(params);

  // do something
  // validate inputs
  validateInputs(app);
  // validate password and username
  // create a new user
  // create a log entry


  regResult.success = true;
  regResult.message = 'Welcome';

  const user = new User(params);
  regResult.user = user;
  return regResult;
};
