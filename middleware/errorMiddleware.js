// backend/middlewares/errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log error stack trace
  res.status(500).json({
      message: "An unexpected error occurred!",
      error: err.message,  // Optional: Send error message
  });
};

module.exports = errorMiddleware;
