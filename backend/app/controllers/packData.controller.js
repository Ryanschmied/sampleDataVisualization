const db = require("../models");
const PackData = db.packData;

// Create and Save new PackData data
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Body cannot be empty!"
    });
    return;
  }

  const sku = Object.keys(req.body).join();
  const productData = req.body[sku];

  // Create packData entry
  const packData = {
    productSku: sku,
    packType: productData.packData.packType,
    components: productData.packData.components.join(',')
  }

  // Save Pack Data in the database
  PackData.create(packData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the pack data to the db."
      });
    });
};

// Retrieve all pack data  from the database.
exports.findAll = (req, res) => {
  PackData.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pack data."
      });
    });
};

// Find a single entry of pack data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  PackData.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find PackData data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving PackData data entry with id=" + id
      });
    });
};

// Update a PackData data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  PackData.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "PackData data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update PackData data with id: ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating PackData data with id=" + id
      });
    });
};

// Delete pack data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  PackData.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given pack data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete pack data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete pack data for the given id" + id
      });
    });
};

// Delete all pack data from the database
exports.deleteAll = (req, res) => {
  PackData.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All pack data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all pack data."
      });
    });
};
