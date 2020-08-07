const Post = require('../models/Post');
const Student = require('../models/Student');

exports.postController = async (req, res) => {
    const { description } = req.body;
    const userId = req.user.id;
    const user = await Student.findById(userId);

    const newPost = new Post({
        description,
        author: userId,
        authorName: user.firstName + ' ' + user.lastName
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

exports.getPosts = async (req, res) => {
    const posts = await Post.find().sort('-created_at');
    res.send(posts);
}

exports.getCurrentStudentPosts = async (req, res) => {
    const currentStudent = await Student.findById(req.user.id);
    const posts = await Post.find({ author: currentStudent._id });
    res.send(posts);
}