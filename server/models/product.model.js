// import mongoose
const mongoose = require("mongoose");

// define the schema with keys & validations (laying out collections)

const ProductSchema = new mongoose.Schema(
  // Schema "Attributes"
  {
    title: {
      type: String,
      required: [true, "Please enter a product name."],
      minLength: [3, "Must be 3+ characters in length."],
    },
    price: {
      type: String,
      required: [true, "Please enter a product price."],
      minLength: [3, "Must be 3+ characters in length."],
    },
    description: {
      type: String,
      required: [true, "Please enter a product description."],
      minLength: [5, "Must be 5+ characters in length."],
      maxLength: [250, "Must be less than 250 characters."]
    },
    // automatically create the createdAt and updatedAt
  },
    { timestamps: true }
);

// create a model with the schema & export it
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
