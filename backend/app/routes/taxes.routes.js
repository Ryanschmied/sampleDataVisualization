module.exports = app => {
    const taxes = require("../controllers/taxes.controller.js");
  
    var router = require("express").Router();
  
    // Create a new taxes  entry
    router.post("/", taxes.create);
  
    // Retrieve all taxes data
    router.get("/", taxes.findAll);
  
    // Retrieve taxes given the id
    router.get("/:id", taxes.findOne);
  
    // Update prodduct data given the id
    router.put("/:id", taxes.update);
  
    // Delete taxes data  given a id
    router.delete("/:id", taxes.delete);
  
    // Delete all taxes data
    router.delete("/", taxes.deleteAll);
  
    app.use('/api/taxes', router);
  };