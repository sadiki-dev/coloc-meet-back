const express = require("express");
const uploadMulter = require("../middlewares/multer");
const PostController = require("../controllers/PostController");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", checkAuth, uploadMulter.any(), PostController.createPost);
router.get("/:postId", PostController.getOnePost);
router.get("/", PostController.getAllPosts);
router.get("/related/:postId", PostController.getRelatedPosts);
router.delete("/:postId", PostController.deletePost);
router.put("/:postId",uploadMulter.any(),PostController.updatePost);

module.exports = router;