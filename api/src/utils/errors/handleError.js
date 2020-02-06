const handleError = (error, res) => {
  const { statusCode, message, errors } = error;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
    errors
  });
};

module.exports = handleError;