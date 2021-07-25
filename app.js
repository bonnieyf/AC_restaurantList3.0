const express = require('express');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars');
const methodOverride = require('method-override') 

const app = express();
const post = 3000;


const router = require('./routes')
require('./config/mongoose')

////////////////////////////////


////////////////////////////////
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine','hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(router);

app.listen(post ,()=>{
    console.log('App is running on http://localhost:3000')
})