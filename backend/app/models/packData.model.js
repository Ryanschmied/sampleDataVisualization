module.exports = (sequelize, Sequelize) => {
  const PackData = sequelize.define("packData", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productSku: {
      type: Sequelize.STRING
    },
    packType: {
      type: Sequelize.STRING
    },
    components: {
      type: Sequelize.STRING
    }
  });

  return PackData;
};