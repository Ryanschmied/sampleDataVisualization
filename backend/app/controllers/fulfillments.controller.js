const db = require("../models");
const Fulfillments = db.fulfillments;

// Create and Save new Fulfillments data
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Body cannot be empty!"
    });
    return;
  }

  Fulfillments.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the fulfillments data to the db."
      });
    }); 
};

// Retrieve all fulfillments data from the database.
exports.findAll = (req, res) => {
  Fulfillments.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving fulfillments data."
      });
    });
};

// Find a single entry of fulfillments data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Fulfillments.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Fulfillments data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Fulfillments data entry with id=" + id
      });
    });
 };

// Update a fulfillments data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Fulfillments.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Fulfillments data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Fulfillments data with id: ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Fulfillments data with id=" + id
      });
    });
};

// Delete fulfillments data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Fulfillments.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given fulfillments data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete fulfillments data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete fulfillments data for the given id" + id
      });
    });
};

// Delete all fulfillments data from the database
exports.deleteAll = (req, res) => {
  Fulfillments.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All fulfillments data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all fulfillments data."
      });
    });
};
