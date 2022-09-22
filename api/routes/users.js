const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Update
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(12);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { // params.id is the id given by the user in /:id
                $set: req.body,
            }, { new: true }); // returns updated user info in real time
            res.status(200).json({
                updatedUser: updatedUser,
                message: "User details has been updated",
                success: 1
            });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json({
            err,
            message: "User is not authorized to update this account",
            success: 0
        });
    }
})

//Delete
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {

        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username })
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json({
                    message: "User has been deleted",
                    success: 1,
                }
                );
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json({
                err,
                message: "User not found",
                success: 0
            })
        }

    } else {
        res.status(401).json({
            err,
            message: "User is not authorized to delete this account",
            success: 0
        })
    }
})

// Get users
router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        const { password, ...others } = user._doc;
        res.status(200).json({
            others: others,
            message: "User is found",
            success: 1

        });
    } catch (err) {
        res.status(500).json({
            err,
            message: "Cannot get users. Please check your connection",
            success: 0

        });;
    }
})

// Get user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json({
            others: others,
            message: "User is found",
            success: 1

        });
    } catch (err) {
        res.status(404).json({
            others: others,
            message: "User not found",
            success: 0
        });
    }
})


module.exports = router;