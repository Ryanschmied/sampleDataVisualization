module.exports = app => {
    const product = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new product  entry
    router.post("/", product.create);
  
    // Retrieve all product data
    router.get("/", product.findAll);
  
    // Retrieve product given the id
    router.get("/:id", product.findOne);
  
    // Update product data given the id
    router.put("/:id", product.update);
  
    // Delete product data given a id
    router.delete("/:id", product.delete);
  
    // Delete all product data
    router.delete("/", product.deleteAll);
  
    app.use('/api/product', router);
  };