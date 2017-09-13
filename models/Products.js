const mongoose = require('mongoose');
<<<<<<< HEAD

const { Schema } = mongoose;

const schema = new Schema({
 
    urlPath: String,
    title: String,
    price: Number,
    rating: { type: String, default: "7/10" },
    commentCount: {
        type: Number,
        default: 1
    },
    isTopRated: Boolean
  
 
});

const Products = mongoose.model('products', schema);

module.exports = Products;
=======
const { Schema } = mongoose;

const schema = new Schema({
    urlPath: String,
    title: String,
    price: Number,
    rating: String,
    commentCount: Number,
    isTopRated: Boolean
});



const Products = mongoose.model('products', schema);

module.exports = Products;
>>>>>>> e01b115e87dfde2e95346e0f54b1a71800b433fb
