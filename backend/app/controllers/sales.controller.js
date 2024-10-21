const db = require("../models");
const Sales = db.sales;

// Create and Save new sales data
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Date cannot be empty!"
    });
    return;
  }

  const salesOrder = Object.keys(req.body).join();
  const salesData = req.body[salesOrder];

  // Create a sales data entry
  const sales = {
    salesOrderId: salesOrder,
    dateCreated: salesData.dateCreated,
    salesChannel: salesData.salesChannel,
    isoCurrency: salesData.isoCurrency,
    subtotal: salesData.subtotal,
    discountAmt: salesData.discountAmt,
    shipping: salesData.shipping,
    taxType: salesData.taxType,
    total: salesData.total
  }; 

  // Save Sales in the database
  Sales.create(sales)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the sales data to the db."
      });
    });      
};

// FUTURE IMPROVEMENTS AND USE CASE BELOW
// Retrieve all sales data from the database.
exports.findAll = (req, res) => {
  Sales.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sales data."
      });
    });
};

// Find a single entry of sales data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sales.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Sales data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Sales data entry with id=" + id
      });
    });
  };

// Update a sales data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Sales.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Sales data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Sales data with id: ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Sales data with id=" + id
      });
    });
 };

// Delete Sales data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Sales.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given Sales data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Sales data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Sales data for the given id" + id
      });
    });
};

// Delete all Sales data from the database
exports.deleteAll = (req, res) => {
  Sales.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All Sales data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Sales data."
      });
    });
};
