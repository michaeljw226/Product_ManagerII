// 1. import controller
const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.model");

module.exports = (app) => {
  // Get Requests
    // API TEST
  app.get("/api/test", ProductController.apiTest);
    // GET All Products
  app.get("/api/products", ProductController.allProducts)
    // GET One Product
  app.get("/api/products/:id", ProductController.oneProduct)
  
  
  // Post Requests
    // POST Create Product
      // note(line 12 does not compete with line 8 as one is get and one is post)
  app.post("/api/products", ProductController.createProduct)
  // Patch Requests
  // PATCH Update One Product
  app.patch("/api/products/:id", ProductController.updateProduct);
  // Delete Requests
    // DELETE One Product
  app.delete("/api/products/:id", ProductController.deleteProduct)
};
// Import routes to our server
