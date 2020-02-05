const handleError = (error, res) => {
  const { statusCode, message } = error;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  });
};

module.exports = handleError;