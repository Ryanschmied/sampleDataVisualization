module.exports = app => {
    const payments = require("../controllers/payments.controller.js");
  
    var router = require("express").Router();
  
    // Create a new payments  entry
    router.post("/", payments.create);
  
    // Retrieve all payments data
    router.get("/", payments.findAll);
  
    // Retrieve payments given the id
    router.get("/:id", payments.findOne);
  
    // Update prodduct data given the id
    router.put("/:id", payments.update);
  
    // Delete payments data  given a id
    router.delete("/:id", payments.delete);
  
    // Delete all payments data
    router.delete("/", payments.deleteAll);
  
    app.use('/api/payments', router);
  };