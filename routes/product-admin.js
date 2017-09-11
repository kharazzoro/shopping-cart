const express = require('express');
const router = express.Router();
const dbClient = require('../helper/dbClient.js');

//  it add Admin Page Form ('products-admin/add')
router.get('/add', (req, res) => {
    res.render("add-product");
})

// it take data from form[admin] and save it to our database ('products-admin/')
router.post('/', (req, res) => {
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