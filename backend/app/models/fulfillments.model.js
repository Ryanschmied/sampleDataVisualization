module.exports = (sequelize, Sequelize) => {
  const Fulfillments = sequelize.define("fulfillments", {
    salesOrderId: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    num: {
      type: Sequelize.INTEGER
    },
    city: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    provider: {
      type: Sequelize.STRING
    },
    trackingNumber: {
      type: Sequelize.STRING,
      unique: true
    },
    deliveryDate: {
      type: Sequelize.DATE
    }
  });
  return Fulfillments;
};