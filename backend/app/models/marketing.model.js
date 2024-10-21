module.exports = (sequelize, Sequelize) => {
  const Marketing = sequelize.define("marketing", {
    weekNum: {
      type: Sequelize.STRING
    },
    dateCreated: {
      type: Sequelize.DATE
    },
    webVisitors: {
      type: Sequelize.INTEGER
    },
    prClippings: {
      type: Sequelize.INTEGER
    }
  });
  return Marketing;
};