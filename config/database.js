const mongoose = require("mongoose");

const uri =
  "mongodb+srv://lemuayala:OarSX1T1x8Yn0hOn@developersalarybd.wstjjmb.mongodb.net/DeveloperSalaryBD?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });

module.exports = mongoose;
