const mongoose = require('mongoose');

const Product = new mongoose.Schema({

    title: {
        type: String, 
        required: true,
    },

    category: {
        type: String, 
        required: true,
    },

    price: {
        type: String, 
        required: true,
    },

    image: {
        type: String, 
        required: true,
    },

}, {timestamps: true})

module.exports = mongoose.model("Product", Product);