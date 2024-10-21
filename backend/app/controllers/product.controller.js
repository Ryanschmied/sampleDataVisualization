const db = require("../models");
const Product = db.product;

// Create and Save new Product data
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

  // Create a product data entry
  const product = {
    productSku: sku,
    barcode: productData.barcode,
    parentSku: productData.parentSku,
    regionCode: productData.regionCode,
    itemType: productData.itemType,
    supplier: productData.supplier,
    brand: productData.brand,
    variantName: productData.variantName,
    shortDesc: productData.shortDesc,
    stockLink: productData.stocklink,
    lastUpdated: productData.lastUpdated
  };

  // Save Product in the database
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the product data to the db."
      });
    });
};

// Retrieve all product data from the database.
exports.findAll = (req, res) => {
  Product.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product data."
      });
    });
};

// Find a single entry of product data given the unique id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product data entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product data entry with id=" + id
      });
    });
};

// Update a product data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product data with id: ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product data with id=" + id
      });
    });
};

// Delete product data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Given product data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete product data for id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete product data for the given id" + id
      });
    });
};

// Delete all product data from the database
exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} All product data was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all product data."
      });
    });
};
