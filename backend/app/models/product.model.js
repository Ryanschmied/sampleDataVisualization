module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    productSku: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    barcode: {
      type: Sequelize.STRING
    },
    parentSku: {
      type: Sequelize.STRING
    },
    regionCode: {
      type: Sequelize.STRING
    },
    itemType: {
      type: Sequelize.STRING
    },
    supplier: {
      type: Sequelize.STRING
    },
    brand: {
      type: Sequelize.STRING
    },
    variantName: {
      type: Sequelize.STRING
    },
    shortDesc: {
      type: Sequelize.STRING
    },
    stockLink: {
      type: Sequelize.STRING
    },
    lastUpdated: {
      type: Sequelize.DATE
    }
  });

  return Product;
};