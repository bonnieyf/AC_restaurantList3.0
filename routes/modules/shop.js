const express = require('express');
const router = express.Router();
const Shop = require('./../../models/shop')

router.get('/new' , (req, res)=>{
    return res.render('new');
})

router.get('/:id' , (req, res)=>{
    const id = req.params.id;
    return Shop.findById(id)
              .lean()
              .then(shop => res.render('detail' ,{ shop }))
              .catch(err => console.log(err))
})

router.get('/:id/edit' , (req, res)=>{
    const id = req.params.id;
    return Shop.findById(id)
              .lean()
              .then(shop => res.render('edit' ,{ shop }))
              .catch(err => console.log(err))
})

router.put('/:id/' , (req, res)=>{
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

router.delete('/:id/' , (req, res)=>{
    const id = req.params.id;
    return Shop.findById(id)
              .then(shop => shop.remove())
              .then(()=> res.redirect('/'))
              .catch(err => console.log(err))
})

router.post('/', (req, res)=>{
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


module.exports = router;