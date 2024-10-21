const db = require("../models");
const Measurements = db.measurements;

// Create and Save new Measurements data
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

   // Create Measurements entry
  const measurements = {
    productSku: sku,
    lmm: productData.packData.Metric.LMM,
    wmm: productData.packData.Metric.WMM,
    hmm: productData.packData.Metric.HMM,
    gwg: productData.packData.Metric.GWG,
    nwg: productData.packData.Metric.NWG,
    cbm: productData.packData.Metric.CBM,
    lin: productData.packData.Imperial.LIN,
    win: productData.packData.Imperial.WIN,
    hin: productData.packData.Imperial.HIN,
    gwlb: productData.packData.Imperial.GWLB,
    nwlb: productData.packData.Imperial.NWLB,
    cbft: productData.packData.Imperial.CBFT,
  }

  // Save measurement in the database
  Measurements.create(measurements)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the measurement to the db."
      });
    });
};

// Retrieve all measurement data from the database.
exports.findAll = (req, res) => {
  Measurements.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving measurement data."
      });
    });
};

// Find a single entry of measurement data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Measurements.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Measurements data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Measurements data entry with id=" + id
      });
    });
};

// Update a measurement data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Measurements.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Measurements data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Measurements data with id: ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Measurements data with id=" + id
      });
    });
};

// Delete measurement data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Measurements.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given measurement data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete measurement data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete measurement data for the given id" + id
      });
    });
};

// Delete all measurement data from the database
exports.deleteAll = (req, res) => {
  Measurements.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All measurement data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all measurement data."
      });
    });
};
