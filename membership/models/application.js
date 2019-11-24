class Application {
  constructor(params) {
    this.app = {};
    this.app.email = params.email;
    this.app.password = params.password;
    this.app.confirm = params.confirm;
    this.app.status = 'pending';
    this.app.message = null;
    this.app.isValid = () => this.app.status === 'validated';
    this.app.isInvalid = () => !this.isValid();
    this.app.setInvalid = (message) => {
      this.app.status = 'invalid';
      this.app.message = message;
    };
    this.app.validate = (message) => {
      this.app.status = 'validated';
    };
  }
}

module.exports = Application;
