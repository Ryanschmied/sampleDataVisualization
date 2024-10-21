module.exports = (sequelize, Sequelize) => {
  const PriceData = sequelize.define("priceData", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productSku: {
      type: Sequelize.STRING
    },
    buyBomUsd: {
      type: Sequelize.DOUBLE
    },
    buyCanadaUsd: {
      type: Sequelize.DOUBLE
    },
    buyFranceUsd: {
      type: Sequelize.DOUBLE
    },
    buyHongKongUsd: {
      type: Sequelize.DOUBLE
    },
    sellCad: {
      type: Sequelize.DOUBLE
    },
    sellUsd: {
      type: Sequelize.DOUBLE
    },
    sellGbp: {
      type: Sequelize.DOUBLE
    },
    sellEur: {
      type: Sequelize.DOUBLE
    },
    sellAud: {
      type: Sequelize.DOUBLE
    },
    sellNzd: {
      type: Sequelize.DOUBLE
    },
    sellSgd: {
      type: Sequelize.DOUBLE
    },
    sellHkd: {
      type: Sequelize.DOUBLE
    }
  });

  return PriceData;
};