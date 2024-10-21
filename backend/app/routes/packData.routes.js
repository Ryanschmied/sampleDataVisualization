module.exports = app => {
    const packData = require("../controllers/packData.controller.js");
  
    var router = require("express").Router();
  
    // Create a new product  entry
    router.post("/", packData.create);
  
    // Retrieve all product data
    router.get("/", packData.findAll);
  
    // Retrieve product given the id
    router.get("/:id", packData.findOne);
  
    // Update product data given the id
    router.put("/:id", packData.update);
  
    // Delete product data given a id
    router.delete("/:id", packData.delete);
  
    // Delete all product data
    router.delete("/", packData.deleteAll);
  
    app.use('/api/packData', router);
  };