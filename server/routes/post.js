const router = require('express').Router();
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const {
    postController, getPosts, getCurrentStudentPosts
} = require('../controllers/post.controller.js');

router.post('/', auth, postController);
router.get('/all', getPosts);
router.get('/user/:id', getCurrentStudentPosts);

module.exports = router;