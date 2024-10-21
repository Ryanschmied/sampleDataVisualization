const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Product Grid Tables
db.measurements = require("./measurements.model.js")(sequelize, Sequelize);
db.priceData = require("./priceData.model.js")(sequelize, Sequelize);
db.packData = require("./packData.model.js")(sequelize, Sequelize);
db.product = require("./product.model.js")(sequelize, Sequelize);

// Sales Orders Tables
db.taxes = require("./taxes.model.js")(sequelize, Sequelize);
db.lineItems = require("./lineItems.model.js")(sequelize, Sequelize);
db.fulfillments = require("./fulfillments.model.js")(sequelize, Sequelize);
db.payments = require("./payments.model.js")(sequelize, Sequelize);
db.sales = require("./sales.model.js")(sequelize, Sequelize);

// Marketing Table
db.marketing = require("./marketing.model.js")(sequelize, Sequelize);

// Establish associations for productGrid data (Foreign Keys)
db.packData.hasOne(db.measurements, { onDelete: 'CASCADE' });
db.measurements.belongsTo(db.packData);

db.product.hasOne(db.packData, { as: 'packData', foreignKey: 'productSku', onDelete: 'CASCADE' });
db.packData.belongsTo(db.product, { as: 'product', foreignKey: 'productSku' });

db.product.hasOne(db.priceData, { as: 'priceData', foreignKey: 'productSku', onDelete: 'CASCADE' });
db.priceData.belongsTo(db.product, { as: 'product', foreignKey: 'productSku' });

// Establish associations for salesOrders data (Foreign Keys)
db.sales.hasMany(db.lineItems, { onDelete: 'CASCADE' });
db.lineItems.belongsTo(db.sales);

db.sales.hasMany(db.fulfillments, { onDelete: 'CASCADE' });
db.fulfillments.belongsTo(db.sales);

db.sales.hasMany(db.payments, { onDelete: 'CASCADE' });
db.payments.belongsTo(db.sales);

db.sales.hasMany(db.taxes, { onDelete: 'CASCADE' });
db.taxes.belongsTo(db.sales);

module.exports = db;
