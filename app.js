const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const app = express();
const post = 3000;

const bodyParser = require('body-parser')
const Shop = require('./models/shop');



////////////////////////////////
mongoose.connect('mongodb://localhost/shop-list' ,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error',()=>{
    console.log('mongodb error!');
});

db.once('open',()=>{
    console.log('mongodb connected!')
})

////////////////////////////////
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine','hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    Shop.find()
        .lean()
        .then(shops => res.render('index', { shops }))
        .catch(err => console.log(err));
})

app.get('/shops/new' , (req, res)=>{
    return res.render('new');
})

app.post('/shops', (req, res)=>{
    const body = req.body;
    const data = {
        name: body.name,
        name_en: body.name_en,
        category: body.category,
        image: body.image,
        location: body.location,
        phone: body.phone,
        google_map: body.google_map,
        rating: body.rating,
        description: body.description,
    }
    return Shop.create(data)
        .then(()=> res.redirect('/'))
        .catch(err => console.log(err));
})




app.listen(post ,()=>{
    console.log('App is running on http://localhost:3000')
})