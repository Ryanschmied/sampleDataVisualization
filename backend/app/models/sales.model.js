module.exports = (sequelize, Sequelize) => {
  const Sales = sequelize.define("sales", {
    salesOrderId: {
      type: Sequelize.STRING
    },
    dateCreated: {
      type: Sequelize.DATE
    },
    salesChannel: {
      type: Sequelize.STRING
    },
    isoCurrency: {
      type: Sequelize.STRING
    },
    subtotal: {
      type: Sequelize.DOUBLE
    },
    discountAmt: {
      type: Sequelize.DOUBLE
    },
    shipping: {
      type: Sequelize.DOUBLE
    },
    taxType: {
      type: Sequelize.STRING
    },
    total: {
      type: Sequelize.DOUBLE
    }
  });
  return Sales;
};