const router = require('express').Router();
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const {
    postController
} = require('../controllers/post.controller.js');

router.post('/', auth, postController);

module.exports = router;