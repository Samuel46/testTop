const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.session && req.session.URL.startsWith("api/proxy")) {
    try {
      token = req.session.email.split(" ");

      const decoded = token[0];

      req.user = await decoded;

      next();
    } catch (err) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }
  }

  try {
    // Verify  email
    const decoded = req.body.email;

    req.user = await User.find({ email: decoded });

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
});

export { protect };
