module.exports = app => {
    const priceData = require("../controllers/priceData.controller.js");
  
    var router = require("express").Router();
  
    // Create a new product  entry
    router.post("/", priceData.create);
  
    // Retrieve all product data
    router.get("/", priceData.findAll);
  
    // Retrieve product given the id
    router.get("/:id", priceData.findOne);
  
    // Update product data given the id
    router.put("/:id", priceData.update);
  
    // Delete product data given a id
    router.delete("/:id", priceData.delete);
  
    // Delete all product data
    router.delete("/", priceData.deleteAll);
  
    app.use('/api/priceData', router);
  };