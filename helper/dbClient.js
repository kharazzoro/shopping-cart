const { MongoClient } = require('mongodb');

const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopcentre';

const getproducts = (query, sucessCallBack) => {
    MongoClient.connect(mongoConnection, (error, db) => {
        const cursor = db.collection("products").find(query);
        cursor.toArray((error, products) => {
            db.close();
            sucessCallBack(error, products)
        });
    });
}

module.exports = {
    getproducts
};