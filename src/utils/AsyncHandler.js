const asyncHandler = (fn) => async (req, res, next) => {
  // return (req, res, next) => {
  //   Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  // };

  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

export {asyncHandler} 
