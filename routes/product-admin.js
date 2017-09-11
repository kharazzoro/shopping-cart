const express = require('express');
const router = express.Router();
const dbClient = require('../helper/dbClient.js');

var bodyParser = require("body-parser");

// const formidable = require('express-formidable')
// router.use(formidable());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/products-admin/add', (req, res) => {
    res.render("add-product");
})


router.post('/products-admin', (req, res) => {
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