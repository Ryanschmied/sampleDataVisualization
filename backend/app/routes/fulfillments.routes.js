module.exports = app => {
    const fulfillments = require("../controllers/fulfillments.controller.js");
  
    var router = require("express").Router();
  
    // Create a new fulfillments  entry
    router.post("/", fulfillments.create);
  
    // Retrieve all fulfillments data
    router.get("/", fulfillments.findAll);
  
    // Retrieve fulfillments given the id
    router.get("/:id", fulfillments.findOne);
  
    // Update fulfillment data given the id
    router.put("/:id", fulfillments.update);
  
    // Delete fulfillments data  given a id
    router.delete("/:id", fulfillments.delete);
  
    // Delete all fulfillments data
    router.delete("/", fulfillments.deleteAll);
  
    app.use('/api/fulfillments', router);
  };