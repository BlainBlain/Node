const mongoose = require("mongoose");

require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.once("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGODB_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
