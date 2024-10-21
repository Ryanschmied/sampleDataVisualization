const axios = require("axios");
const {readFileSync} = require('fs');
// Load data
// use routes to load data into the db

async function insertData(entry, endpoint) {
  return axios.post(`http://localhost:8080/api/${endpoint}`, entry, {headers: {'Content-Type': 'application/json'}})
    .then((res) => {
      console.log(`Status: ${res.status}`);
      console.log('Body: ', res.data);
    }).catch((err) => {
      console.log(err);
  })
}
let readMarketingData = () => {
    return JSON.parse(readFileSync(require.resolve('../../pey-sample-json/marketingData.json')))
}
let readProuctData = () => {
    return JSON.parse(readFileSync(require.resolve('../../pey-sample-json/productGrid.json')))
}
let readSalesOrderData = () => {
    return JSON.parse(readFileSync(require.resolve('../../pey-sample-json/salesOrders.json')))
}

const marketingData = readMarketingData()['marketingData'];
const productData = readProuctData()['productSKU'];
const salesOrdersData = readSalesOrderData()['salesOrders'];

async function dataLoader() {
  // Insert data into db

  // Insert marketing data into db
  for (const [key, value] of Object.entries(marketingData)) {
    var entry = {
        [key]: value
    }
    insertData(entry, 'marketing');
  }
  // Iterate through each entry of product data
  for (const [key, value] of Object.entries(productData)) {
    var entry = {
      [key]: value
    }
    // Ensure that the product table entries are complete before loading children (foreign key constraints)
    await insertData(entry, 'product');
    insertData(entry, 'packData');
    insertData(entry, 'priceData');
    insertData(entry, 'measurements');
  } 

  // Iterate through each entry of sales order data
  for (const [key, value] of Object.entries(salesOrdersData)) {
    var entry = {
      [key]: value
    }
    
    // load sales data into db
    await insertData(entry, 'sales');

    const salesOrder = key;
    const salesData = salesOrdersData[key];
    
    // Load tax data
    var taxEntry = {}
    for (const [key1, value1] of Object.entries(salesData.taxes)) {
      taxEntry = {
        salesOrderId: salesOrder,
        taxType: key1,
        amount: value1
      };
      insertData(taxEntry, 'taxes');
    } 

    // Load line items data
    var lineItemEntry = {};
    for (const [key2, value2] of Object.entries(salesData.lineItems)){
      lineItemEntry = {
        salesOrderId: salesOrder,
        productSku: key2,
        qty: value2
      };
      insertData(lineItemEntry, 'lineItems');
    }
    
     // Insert payment data into db
     var paymentEntry = {};
     salesData.payments.forEach(payment => {
       paymentEntry = {
         salesOrderId: salesOrder,
         num: payment.num,
         paymentType: payment.paymentType,
         amount: payment.amount,
         paymentDate: payment.paymentDate
       }
       insertData(paymentEntry, 'payments');
     })

      // Insert fulfillment data into db
      var paymentEntry = {};
      salesData.payments.forEach(payment => {
        paymentEntry = {
          salesOrderId: salesOrder,
          num: payment.num,
          paymentType: payment.paymentType,
          amount: payment.amount,
          paymentDate: payment.paymentDate
        }
        insertData(paymentEntry, 'payments');
      })

      // Insert fulfillment data into db
      var fulfillmentEntry = {};
      salesData.fulfillments.forEach(fulfillment => {
        fulfillmentEntry = {
          salesOrderId: salesOrder,
          num: fulfillment.num,
          city: fulfillment.city,
          country: fulfillment.country,
          provider: fulfillment.provider,
          trackingNumber: fulfillment.trackingNumber,
          deliveryDate: fulfillment.deliveryDate
        }
        insertData(fulfillmentEntry, 'fulfillments');
      })
  }
}

module.exports = dataLoader;
