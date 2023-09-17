// import model
const Product = require("../models/product.model");

// Server Test:
module.exports.apiTest = (req, res) => {
  res.json({ message: "Server is working!" });
};

// export all functions with placeholder
// ALL Products
module.exports.allProducts = (req, res) => {
  Product.find()
    .then((productList) => res.json(productList))
    .catch((err) => res.status(400).json(err));
  
};
// ONE Product
module.exports.oneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json(oneProduct))
    .catch((err) => res.status(400).json(err));
};
// Create Product
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.status(400).json(err));
};
// Update Product
module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    // line 32 is enabling validations
    runValidators: true,
  })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.status(400).json(err));
};
// Delete Product
module.exports.deleteProduct = (req, res) => {
  Product.findOneAndDelete({ _id: req.params.id })
    .then((status) => res.json(status))
    .catch((err) => res.status(400).json(err));
};
