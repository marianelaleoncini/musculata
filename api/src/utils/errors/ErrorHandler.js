class ErrorHandler extends Error {
  constructor(statusCode, message = 'There was an error') {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
module.exports = ErrorHandler;