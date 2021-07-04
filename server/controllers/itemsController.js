const router = require('express').Router();
const Item = require('../models/item');
const auth = require('../middlewears/auth')

router.get('/items', (req, res) => {
    Item.find({}).then(items => {
        res.send(items);
    })
})

module.exports = router;