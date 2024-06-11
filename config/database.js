const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "insert the bd url here";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    return client;
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas", err);
    throw err;
  }
}

module.exports = { connectDB, client };
