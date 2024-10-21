module.exports = app => {
    const sales = require("../controllers/sales.controller.js");
  
    var router = require("express").Router();
  
    // Create a new sales  entry
    router.post("/", sales.create);
  
    // Retrieve all sales data
    router.get("/", sales.findAll);
  
    // Retrieve sales given the id
    router.get("/:id", sales.findOne);
  
    // Update prodduct data given the id
    router.put("/:id", sales.update);
  
    // Delete sales data  given a id
    router.delete("/:id", sales.delete);
  
    // Delete all sales data
    router.delete("/", sales.deleteAll);
  
    app.use('/api/sales', router);
  };