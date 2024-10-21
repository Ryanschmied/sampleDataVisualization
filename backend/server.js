const express = require("express");
const cors = require("cors");
const dataLoader = require('./app/loaders/loadData.js');

const app = express();

// Set origin of frontend in cors policy
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//     loadData;
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// for development, drop and re-sync db
db.sequelize.sync({force: true})
.then(() => {
  console.log("Synced db.");
  return dataLoader();
})
.then(() => {
  console.log("Data loaded successfully");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
})

require("./app/routes/marketing.routes")(app);
require("./app/routes/product.routes")(app);
require("./app/routes/sales.routes")(app);
require("./app/routes/packData.routes")(app);
require("./app/routes/priceData.routes")(app);
require("./app/routes/measurements.routes")(app);
require("./app/routes/taxes.routes")(app);
require("./app/routes/lineItems.routes")(app);
require("./app/routes/payments.routes")(app);
require("./app/routes/fulfillments.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});







