const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Category", CategorySchema);