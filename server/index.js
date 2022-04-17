"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

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
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
