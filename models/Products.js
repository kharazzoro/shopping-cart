const mongoose = require('mongoose');

const { Schema } = mongoose;
const schema = new Schema({

    urlPath: String,
    title: String,
    price: Number,
    rating: { type: String, default: '7/10' },
    commentCount: {
        type: Number,
        default: 1,
    },
    isTopRated: Boolean,
});

const Products = mongoose.model('Product', schema);

module.exports = Products;
