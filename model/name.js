// THis is testing part . 

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create schema 

const shoppingapp = new Schema ({
    name: String,
    count: Number,
});

// creating model
const producttype = mongoose.model('producttype',shoppingapp);
module.exports = producttype;


