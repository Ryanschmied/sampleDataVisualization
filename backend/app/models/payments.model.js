module.exports = (sequelize, Sequelize) => {
  const Payments = sequelize.define("payments", {
    salesOrderId: {
      type: Sequelize.STRING
    },
    num: {
      type: Sequelize.INTEGER
    },
    paymentType: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.DOUBLE
    },
    paymentDate: {
      type: Sequelize.DATE
    }
  });
  return Payments;
};