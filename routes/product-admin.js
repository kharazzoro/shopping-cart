const express = require('express');
const router = express.Router();
const dbClient = require('../helper/dbClient.js');
const generatePath = require('./generate-path.js');

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

    let query = req.body
    let myTitle = req.body.title;

    const urlPath = generatePath(myTitle)
    query.urlPath = urlPath;

    dbClient.addProducts(query, callBack);

})

module.exports = router;