const mongoose = require('mongoose');

const { Schema } = mongoose;
const schema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    content: String,
});

const Comment = mongoose.model('Comment', schema);

module.exports = Comment;
