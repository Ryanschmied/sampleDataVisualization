module.exports = app => {
    const marketing = require("../controllers/marketing.controller.js");
  
    var router = require("express").Router();
  
    // Create a new marketing data entry
    router.post("/", marketing.create);
  
    // Retrieve all marketing data
    router.get("/", marketing.findAll);
  
    // Retrieve one week of marketing data given the id
    router.get("/:id", marketing.findOne);
  
    // Update a week of marketing data given the id
    router.put("/:id", marketing.update);
  
    // Delete a marketing data entry given a id
    router.delete("/:id", marketing.delete);
  
    // Delete all marketing data
    router.delete("/", marketing.deleteAll);
  
    app.use('/api/marketing', router);
  };