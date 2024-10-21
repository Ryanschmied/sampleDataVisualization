module.exports = (sequelize, Sequelize) => {
  const LineItems = sequelize.define("lineItems", {
    salesOrderId: {
      type: Sequelize.STRING
    },
    productSku: {
      type: Sequelize.STRING
    },
    qty: {
      type: Sequelize.INTEGER
    }
  });
  return LineItems;
};