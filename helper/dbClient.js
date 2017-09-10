 const Product = require('../models/Products');
 const mongoose = require('mongoose');
 const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopcentre';

 const getproducts = (query, sucessCallBack) => {
     mongoose.connect(mongoConnection);
     Product.find(query, sucessCallBack);
 }

 module.exports = {
     getproducts
 };