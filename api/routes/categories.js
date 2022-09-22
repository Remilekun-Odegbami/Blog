const router = require("express").Router();
const Category = require("../models/Category");

// create category
router.post("/", async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json({
            savedCategory: savedCategory,
            message: "Category was created successfully",
            success: 1
        });
    } catch (err) {
        res.status(400).json({
            err,
            message: "Cannot create categories",
            success: 0
        });
    }
})

// get all categories
router.get("/", async (req, res) => {
    try {
        const allCategories = await Category.find();
        res.status(200).json(allCategories);
    } catch (err) {
        res.status(500).json({
            err,
            message: "Cannot get categories",
            success: 0
        });
    }
})

module.exports = router;