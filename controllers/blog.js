const asyncHandler = require("../middleware/async");

// @desc      Get all posts
// @route     GET /api/v1/posts
// @access    Private
exports.getPosts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res);
});
// @desc      Get all posts
// @route     GET /api/v1/posts/:id
// @access    Private
exports.getPost = asyncHandler(async (req, res, next) => {
  res.status(200).json(res);
});

// @desc      Create user
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createPost = asyncHandler(async (req, res, next) => {
  const post = await create(req.body);

  res.status(201).json({
    success: true,
    data: post,
  });
});
