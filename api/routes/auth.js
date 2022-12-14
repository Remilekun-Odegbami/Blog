const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        const user = await newUser.save()
        res.status(200).json({
            user: user,
            message: "User was created successfully",
            success: 1
        })

        // //Check if email or username already exist
        // const checkUser = await newUser.find({
        //     email: req.body.email,
        //     username: req.body.username
        // });
        // if (!checkUser) {
        //     res.status(401).json({
        //         message: "An account with this username or email already exists",
        //         success: 0
        //     });
        // }

    } catch (err) {
        res.status(500).json({
            err,
            message: "An account with this username or email already exists. Please login or try a new username or email address",
            success: 0
        });
    }
})

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).json({
            message: "Email or password is incorrect",
            success: 0,
        })
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(404).json({
            message: "Email or password is incorrect",
            success: 0
        })

        const { password, ...others } = user._doc;

        res.status(200).json({
            others: others,
            message: "Login successful",
            success: 1
        });

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;