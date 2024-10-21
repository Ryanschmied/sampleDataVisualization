const db = require("../models");
const Taxes = db.taxes;

// Create and Save new Taxes data
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Body cannot be empty!"
    });
    return;
  }

  Taxes.create(req.body)
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

// Retrieve all taxes data from the database.
exports.findAll = (req, res) => {
  Taxes.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving taxes data."
      });
    });
};

// Find a single entry of taxes data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Taxes.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Taxes data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Taxes data entry with id=" + id
      });
    });
};

// Update a taxes data by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Taxes.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Taxes data was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Taxes data with id: ${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Taxes data with id=" + id
        });
      });
  };

// Delete taxes data with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Taxes.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Given taxes data was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete taxes data for id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete taxes data for the given id" + id
        });
      });
  };

// Delete all taxes data from the database
exports.deleteAll = (req, res) => {
    Taxes.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} All taxes data was deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all taxes data."
        });
      });
  };
