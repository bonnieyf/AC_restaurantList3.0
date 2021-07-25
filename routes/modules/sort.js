const express = require('express');
const router = express.Router();
const Shop = require('../../models/shop')

router.get('/name_asc', (req, res) => {
    Shop.find()
        .lean()
        .sort({'name_en': 'asc'})
        .then(shops => {
            res.render('sort', { shops: shops })
        })
        .catch(err => console.log(err));
});

router.get('/name_desc', (req, res) => {
    Shop.find()
        .lean()
        .sort({'name_en': 'desc'})
        .then(shops => {
            res.render('sort', { shops: shops })
        })
        .catch(err => console.log(err));
});

router.get('/rating', (req, res) => {
    Shop.find()
        .lean()
        .sort({'rating': 'desc'})
        .then(shops => {
            res.render('sort', { shops: shops })
        })
        .catch(err => console.log(err));
});

router.get('/category', (req, res) => {
    Shop.find()
        .lean()
        .sort({'category': 'asc'})
        .then(shops => {
            res.render('sort', { shops: shops })
        })
        .catch(err => console.log(err));
});

  module.exports = router;