module.exports = (sequelize, Sequelize) => {
  const Measurements = sequelize.define("measurements", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productSku: {
      type: Sequelize.STRING
    },
    lmm: {
      type: Sequelize.DOUBLE
    },
    wmm: {
      type: Sequelize.DOUBLE
    },
    hmm: {
      type: Sequelize.DOUBLE
    },
    gwg: {
      type: Sequelize.DOUBLE
    },
    nwg: {
      type: Sequelize.DOUBLE
    },
    cbm: {
      type: Sequelize.DOUBLE
    },
    lin: {
      type: Sequelize.DOUBLE
    },
    win: {
      type: Sequelize.DOUBLE
    },
    hin: {
      type: Sequelize.DOUBLE
    },
    gwlb: {
      type: Sequelize.DOUBLE
    },
    nwlb: {
      type: Sequelize.DOUBLE
    },
    cbft: {
      type: Sequelize.DOUBLE
    }
  });

  return Measurements;
};