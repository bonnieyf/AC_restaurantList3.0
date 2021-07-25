const express = require('express');
const router = express.Router();
const home = require('./modules/home');
const shop = require('./modules/shop');
const search = require('./modules/search');
const sort = require('./modules/sort');

router.use('/',home);
router.use('/shops/',shop);
router.use('/search/',search);
router.use('/sort/',sort);


module.exports = router;