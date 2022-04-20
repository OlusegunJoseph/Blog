"use strict";

// import the needed node_modules.
const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const {
  getPosts,
  getSinglePost,
  addPost,
  deletePost,
  updatePost,
} = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.json())

  .get("/api/get-posts", getPosts)
  .get("/api/get-post/:_id", getSinglePost)
  .post("/api/add-post/", addPost)
  .delete("/api/delete-post/:_id", deletePost)
  .patch("/api/update-post", updatePost)

  //   .get("/api/get-post", SinglePost)

  //   .post("/api/get-post", SinglePost)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));
