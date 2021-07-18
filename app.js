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

app.get('/shops/:id' , (req, res)=>{
    const id = req.params.id;
    return Shop.findById(id)
              .lean()
              .then(shop => res.render('detail' ,{ shop }))
              .catch(err => console.log(err))
})

app.get('/shops/:id/edit' , (req, res)=>{
    const id = req.params.id;
    return Shop.findById(id)
              .lean()
              .then(shop => res.render('edit' ,{ shop }))
              .catch(err => console.log(err))
})

app.post('/shops/:id/edit' , (req, res)=>{
    const id = req.params.id;
    const name = req.body.name;
    return Shop.findById(id)
              .then(shop => {
                shop.name = name;
                return shop.save();
              })
              .then(() => res.redirect(`/shops/${id}`))
              .catch(err => console.log(err))
});

app.post('/shops/:id/delete' , (req, res)=>{
    const id = req.params.id;
    return Shop.findById(id)
              .then(shop => shop.remove())
              .then(()=> res.redirect('/'))
              .catch(err => console.log(err))
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




app.get('/search', (req, res) => {
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


app.listen(post ,()=>{
    console.log('App is running on http://localhost:3000')
})