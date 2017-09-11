const express = require('express');
const router = express.Router();
const dbClient = require('../helper/dbClient.js');

var bodyParser = require("body-parser");

// const formidable = require('express-formidable')
// router.use(formidable());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
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

router.get('/products-admin/add', (req, res) => {
    res.render("add-product");
})


router.post('/products-admin/new-product', (req, res) => {
    const callBack = (err) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.redirect('/');
        }
    }
    const query = req.body
    dbClient.addProducts(query, callBack);
})

module.exports = router;