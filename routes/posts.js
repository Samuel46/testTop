const express = require("express");
const { getPosts } = require("../controllers/blog");

const router = express.Router({ mergeParams: true });

const { protect } = require("../middleware/auth");
const { getPost, createPost } = require("../controllers/blog");

router.use(protect);

router.route("/").get(getPosts).post(createPost);

router.route("/:id").get(getPost);

module.exports = router;
