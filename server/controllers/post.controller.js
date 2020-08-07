const Post = require('../models/Post');
const Student = require('../models/Student');

exports.postController = (req, res) => {
    const { description } = req.body;
    const userId = req.user.id;

    const newPost = new Post({
        description,
        author: userId
    });

    newPost.save()
           .then(async (post) => {
               await Student.updateOne({ _id: userId }, { $push: { posts: post._id.toString() } })
               res.send(post);
           })
           .catch(e => {
               console.log(e);
           })

}