const db = require("../models");
const PriceData = db.priceData;

// Create and Save new PriceData data
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
  
    // Create priceData entry
  const priceData = {
    productSku: sku,
    buyBomUsd: productData.priceData.Buy.BOMUSD,
    buyCanadaUsd: productData.priceData.Buy.buyCanadaUSD,
    buyFranceUsd: productData.priceData.Buy.buyFranceUSD,
    buyHongKongUsd: productData.priceData.Buy.buyHongKongUSD,
    buyBomUsd: productData.priceData.Buy.BOMUSD,
    sellCad: productData.priceData.Sell.CAD,
    sellUsd: productData.priceData.Sell.USD,
    sellGpb: productData.priceData.Sell.GBP,
    sellEur: productData.priceData.Sell.EUR,
    sellAud: productData.priceData.Sell.AUD,
    sellNzd: productData.priceData.Sell.NZD,
    sellSgd: productData.priceData.Sell.SGD,
    sellHkd: productData.priceData.Sell.HKD
  }

    // Save Price Data in the database
  PriceData.create(priceData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the price data to the db."
      });
    });
};

// Retrieve all price data from the database.
exports.findAll = (req, res) => {
  PriceData.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving price data."
      });
    });
};

// Find a single entry of price data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  PriceData.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find PriceData data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving PriceData data entry with id=" + id
      });
    });
};

// Update a PriceData data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  PriceData.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "PriceData data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update PriceData data with id: ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating PriceData data with id=" + id
      });
    });
};

// Delete price data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  PriceData.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given price data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete price data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete price data for the given id" + id
      });
    });
};

// Delete all price data from the database
exports.deleteAll = (req, res) => {
  PriceData.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All price data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all price data."
      });
    });
};
