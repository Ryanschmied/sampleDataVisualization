module.exports = app => {
    const measurements = require("../controllers/measurements.controller.js");
  
    var router = require("express").Router();
  
    // Create a new product  entry
    router.post("/", measurements.create);
  
    // Retrieve all product data
    router.get("/", measurements.findAll);
  
    // Retrieve product given the id
    router.get("/:id", measurements.findOne);
  
    // Update product data given the id
    router.put("/:id", measurements.update);
  
    // Delete product data given a id
    router.delete("/:id", measurements.delete);
  
    // Delete all product data
    router.delete("/", measurements.deleteAll);
  
    app.use('/api/measurements', router);
  };