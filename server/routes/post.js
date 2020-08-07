const router = require('express').Router();
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const {
    postController, getPosts
} = require('../controllers/post.controller.js');

router.post('/', auth, postController);
router.get('/all', getPosts);

module.exports = router;