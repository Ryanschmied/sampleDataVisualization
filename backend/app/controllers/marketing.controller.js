const db = require("../models");
const Marketing = db.marketing;

// Create and Save new Marketing data
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Body cannot be empty!"
    });
    return;
  }

  // Create a marketingData entry
  const weekNum = Object.keys(req.body).join();
  const marketingData = req.body[weekNum];

  const marketing = {
    weekNum: weekNum,
    dateCreated: marketingData.dateCreated,
    webVisitors: marketingData.webVisitors,
    prClippings: marketingData.prClippings
  };

  // Save Marketing data in the database
  Marketing.create(marketing)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the Marketing data to the db."
      });
    });
};

// Retrieve all marketing data from the database.
exports.findAll = (req, res) => {
  Marketing.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving marketing data."
      });
    });
};

// Find a single entry of marketing data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Marketing.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Marketing data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Marketing data entry with id=" + id
      });
    });
};

// Update a weeks data by the dateCreated in the request
exports.update = (req, res) => {
  const dateCreated = req.params.dateCreated;

  Marketing.update(req.body, {
    where: { dateCreated: dateCreated }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Marketing data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Marketing data for the week of ${dateCreated}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Marketing data for the week of=" + dateCreated
      });
    });
};

// Delete a weeks data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Marketing.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given marketing data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Marketing data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Marketing data for the given id" + id
      });
    });
};

// Delete all marketing data from the database
exports.deleteAll = (req, res) => {
  Marketing.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All Marketing data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Marketing data."
      });
    });
};
