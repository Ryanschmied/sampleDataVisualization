const db = require("../models");
const LineItems = db.lineItems;

// Create and Save new LineItems data
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Body cannot be empty!"
    });
    return;
  }

  LineItems.create(req.body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while adding the line items data to the db."
    });
  }); 
};

// Retrieve all LineItem data from the database.
exports.findAll = (req, res) => {
  LineItems.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving LineItem data."
      });
    });
};

// Find a single entry of LineItem data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  LineItems.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find LineItems data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving LineItems data entry with id=" + id
      });
    });
};

// Update a LineItems data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  LineItems.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "LineItems data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update LineItems data with id: ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating LineItems data with id=" + id
      });
    });
};

// Delete LineItem data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  LineItems.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given LineItem data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete LineItem data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete LineItem data for the given id" + id
      });
    });
};

// Delete all LineItem data from the database
exports.deleteAll = (req, res) => {
  LineItems.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All LineItem data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all LineItem data."
      });
    });
};
