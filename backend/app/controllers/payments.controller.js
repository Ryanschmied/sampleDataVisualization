const db = require("../models");
const Payments = db.payments;

// Create and Save new Payments data
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Body cannot be empty!"
    });
    return;
  }

  Payments.create(req.body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while adding the taxes data to the db."
    });
  }); 
};

// Retrieve all payments data from the database.
exports.findAll = (req, res) => {
  Payments.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving payments data."
      });
    });
};

// Find a single entry of payments data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Payments.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Payments data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Payments data entry with id=" + id
      });
    });
};

// Update a Payments data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Payments.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Payments data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Payments data with id: ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Payments data with id=" + id
      });
    });
};

// Delete payments data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Payments.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given payments data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete payments data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete payments data for the given id" + id
      });
    });
};

// Delete all payments data from the database
exports.deleteAll = (req, res) => {
  Payments.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All payments data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all payments data."
      });
    });
};
