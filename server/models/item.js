const { Schema, model } = require('mongoose');

const itemSchema = Schema({
    title: String,
    price: String,
    category: String,
    img: String
});

const Item = model('Item', itemSchema);

module.exports = Item;