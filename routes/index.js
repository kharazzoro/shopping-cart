const express = require('express');
const router = express.Router();
const dbClient = require('../helper/dbClient.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    const callBack = (error, products) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.render('index', {
                title: 'AcmeInc',
                description: 'We sell the finest goods and services.',
                products,
            });
        }
    }
    dbClient.getProducts({}, callBack)

});

/* GET single-product information page. */
router.get('/products/:urlPath', function(req, res, next) {
    const urlPath = req.params.urlPath;
    const callBack = (error, products) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.render('single-product', {
                title: products[0].title,
                description: `We sell the finest goods and services. 
 
                This is the ${products[0].title}.`,
 
                product: products[0]
            });
        }
    }
    dbClient.getProducts({ urlPath }, callBack);

});

module.exports = router;