const express = require('express');
const router = express.Router();
const dbClient = require('../helper/dbClient.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  const callBack = (error, products) => {
    if (error) {
      res.sendStatus(500)
    }
    else {
      res.render('index', {
        title: 'AcmeInc',
        description: 'We sell the finest goods and services.',
        products,
      });
    }
  }
  dbClient.getproducts({}, callBack)
});

module.exports = router;