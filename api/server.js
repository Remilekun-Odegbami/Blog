const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.Mongo_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("connected to MongoDb"))
    .catch(err => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, "Media");
    },
    filename: (req, file, callBack) => {
        callBack(null, req.body.name);
    }
})

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded successfully");
})




app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/posts", postRoute);



const port = "5000"
app.listen(port, () => {
    console.log(`App is running at port ${port}`);
})
