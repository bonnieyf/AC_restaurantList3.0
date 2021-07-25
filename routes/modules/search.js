const express = require('express');
const router = express.Router();
const Shop = require('./../../models/shop')

router.get('/', (req, res) => {
    const keyword = req.query.keyword;

    Shop.find()
        .lean()
        .then(shops => {
            const result = shops.filter(shop => {
                return shop.name.toLowerCase().includes(keyword.toLowerCase())
            })

            res.render('search', { shops: result, keyword: keyword })
        })
        .catch(err => console.log(err));
  })

  module.exports = router;