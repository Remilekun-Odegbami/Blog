const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Create post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json({
            savedPost: savedPost,
            message: "New Post was created successfully",
            success: 1
        });
    } catch (err) {
        res.status(409).json({
            err,
            message: "Post not created because title or content already exists in blog. Please use a different title or content",
            success: 0
        });
    }

})


//Update Post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                )
                res.status(200).json({
                    updatedPost: updatedPost,
                    message: "Post was updated successfully",
                    success: 1
                });
            }
            catch (error) {
                res.status(401).json({
                    error,
                    message: "User not authorized to edit post",
                    success: 0
                });;
            }

        } else {
            res.status(401).json({
                message: "User not authorized to update post",
                success: 0
            })
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

//Delete Post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json({
                    message: "Post has been deleted successfully",
                    success: 1
                })
            }
            catch (error) {
                res.status(500).json(err);
            }

        }
        else {
            res.status(401).json({
                message: "User not authorized to delete post",
                success: 0
            })

        }
    } catch (err) {
        res.status(500).json({
            message: "Post not deleted. Please try again",
            success: 0
        });
    }
})

// Get Post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({
            err,
            message: "Cannot get post. Please check your connection",
            success: 0
        });
    }
})

// Get Posts
router.get('/', async (req, res) => {
    const username = req.query.user;
    const categoryName = req.query.category
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (categoryName) {
            posts = await Post.find({
                categories: {
                    $in: [categoryName],
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({
            err,
            message: "Cannot get posts at this time. Please check your connection",
            success: 0
        });
    }
})


module.exports = router;