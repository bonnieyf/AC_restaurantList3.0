const express = require('express');
const router = express.Router();
const Shop = require('./../../models/shop')

router.get('/', (req, res)=>{
    Shop.find()
        .lean()
        .then(shops => res.render('index', { shops }))
        .catch(err => console.log(err));
})

module.exports = router;