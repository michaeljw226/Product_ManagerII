// importing mongoose library
const mongoose = require("mongoose");

// extracting variables from .env
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${pw}@cluster0.sl5fj0j.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log("✅ Established a connection to the database!"))
  .catch((err) =>
    console.log("❌ Something went wrong when connecting to the database!", err)
  );