class ErrorHandler extends Error {
  errors;
  constructor(statusCode, message = 'There was an error', errors = undefined) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
  }
}
module.exports = ErrorHandler;