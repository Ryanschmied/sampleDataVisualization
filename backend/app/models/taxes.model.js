module.exports = (sequelize, Sequelize) => {
  const Taxes = sequelize.define("taxes", {
    salesOrderId: {
      type: Sequelize.STRING
    },
    taxType: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.DOUBLE
    }
  });
  return Taxes;
};