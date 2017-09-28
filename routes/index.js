const express = require('express');

const router = express.Router();
const dbClient = require('../helper/dbClient.js');

/* GET home page. */
router.get('/', (req, res) => {
  const callBack = (error, products) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.render('index', {
        title: 'AcmeInc',
        description: 'We sell the finest goods and services.',
        products,
      });
    }
  };
  dbClient.getProducts({}, callBack);
});

/* GET single-product information page. */
router.get('/products/:urlPath', (req, res) => {
  const { urlPath } = req.params;
  const callBack = (error, products) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.render('single-product', {
        title: products[0].title,
        description: `We sell the finest goods and services. 
 
                This is the ${products[0].title}.`,

        product: products[0],
      });
    }
  };
  dbClient.getProducts({ urlPath }, callBack);
});

router.post('/products/:productId/comments', (req, res) => {
  const comment = {
    productId: req.params.productId,
    content: req.body.content,
  };

  const callBack = (error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.redirect('/');
    }
  };

  dbClient.addComments(comment, callBack);
});
module.exports = router;
