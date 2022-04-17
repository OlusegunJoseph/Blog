const { MongoClient, db } = require("mongodb");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getPosts = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("blog");
    const articles = await db.collection("posts").find().toArray();
    // const apiData = await fetch(
    //   "API token here"
    // );

    // const articles = await apiData.json();
    res
      .status(200)
      .json({ status: 200, data: articles, message: "Request Successful" });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
};

const getSinglePost = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("blog");
    const resId = req.params._id;

    console.log("Response is:", resId);
    const data = await db.collection("posts").find({ id: resId }).toArray();

    data.length > 0
      ? res
          .status(200)
          .json({ status: 200, data, message: "Request Successful" })
      : res.status(400).json({ status: 400, message: "Post not found" });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
};

const addPost = async (req, res) => {
  try {
    await client.connect();
    const postDetails = req.body;
    // const postUniqueId = req.body.blog;
    postDetails["id"] = uuidv4();

    const db = client.db("blog");
    const data = await db.collection("posts").insertOne(postDetails);
    res.status(200).json({
      status: 200,
      data: postDetails,
      message: "Post added successful",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
  client.close();
};

const deletePost = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("blog");
    const postId = req.params._id;
    const post = await db.collection("posts").findOne({ id: postId });

    const data = await db.collection("posts").deleteOne({ id: postId });

    data.deletedCount === 1
      ? res.status(200).json({
          status: 204,
          resId: postId,
          message: "Post deleted",
        })
      : res.status(404).json({
          status: 404,
          resId: postId,
          message: "Post not found",
        });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, data: req.params._id, message: "Server error" });
  }
  client.close();
};

const updatePost = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("blog");
    const { id, title, description, content } = req.body;

    const post = await db.collection("posts").findOne({ id });

    console.log("post is:", post);
    // console.log("ID is:", id);
    // console.log("Body is:", req.body);
    if (post) {
      console.log("Hellow world");

      const clonePost = { _id: post._id, ...req.body };
      // post.title = title;
      // post.description = description;
      // post.content = content;
      const _id = post._id;

      console.log("Hellow world");
      const updatePost = await db
        .collection("posts")
        .replaceOne({ _id }, clonePost);

      console.log("postfound found is:", updatePost);

      if (updatePost.modifiedCount > 0) {
        return res.status(200).json({
          status: 200,
          updatePost: updatePost,
          message: "Reservation updated successfully",
        });
      } else {
        return res.status(404).json({
          status: 404,
          data: req.body,
          message: "Error. No modification made",
        });
      }
      // if (postFound && previousTitle !== post.title) {
      //   const seatUnpost = await db.collection("posts").updateOne(
      //     { [id]: { $exists: true } },

      //     { arrayFilters: [{ "elem.id": { $eq: previousTitle } }] }
      //   );

      //   const updatePost = await db
      //     .collection("posts")
      //     .replaceOne({ id }, post);

      //   console.log("Updatepost", updatePost);

      // }
      // else if (postFound) {

      //   const updatePost = await db
      //     .collection("posts")
      //     .replaceOne({ id }, post);
      //   return res.status(200).json({
      //     status: 200,
      //     updatePost,
      //     message: "Post updated successfully",
      //   });
      // }
    }

    return res.status(404).json({
      status: 404,
      data: req.body,
      message: "Error. Please try your request again",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
  client.close();
};

module.exports = { getPosts, getSinglePost, addPost, deletePost, updatePost };
