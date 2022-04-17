const { MongoClient, db } = require("mongodb");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const post = require("./data.json");

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("blog");
    let newPost = post.map((el) => {
      el["id"] = uuidv4();

      return el;
    });

    const result = await db.collection("posts").insertMany(newPost);

    console.log("datas was inserted successfully");
  } catch (err) {
    console.log("error", err.stack);
  }
  client.close();
  console.log("disconnected");
};

batchImport();
