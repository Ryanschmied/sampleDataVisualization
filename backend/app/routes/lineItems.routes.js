module.exports = app => {
    const lineItems = require("../controllers/lineItems.controller.js");
  
    var router = require("express").Router();
  
    // Create a new lineItems  entry
    router.post("/", lineItems.create);
  
    // Retrieve all lineItems data
    router.get("/", lineItems.findAll);
  
    // Retrieve lineItems given the id
    router.get("/:id", lineItems.findOne);
  
    // Update prodduct data given the id
    router.put("/:id", lineItems.update);
  
    // Delete lineItems data  given a id
    router.delete("/:id", lineItems.delete);
  
    // Delete all lineItems data
    router.delete("/", lineItems.deleteAll);
  
    app.use('/api/lineItems', router);
  };