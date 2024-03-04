const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Order = new mongoose.Schema({

    orderId: {
        type: String, 
        required: true,
        default: uuidv4, // Generate a random UUID for orderId
    },

    productId: {
        type: String, 
        required: true,
    },

    userId: {
        type: String, 
        required: true,
    },

    price: {
        type: String, 
        required: true,
    },

    quantity: {
        type: String, 
        required: true,
        default: '1', // Default quantity to 1
    },

    orderStatus: {
        type: String, 
        required: true,
        default: 'confirmed', // Default order status to 'confirmed'
    },

    address: {
        type: String, 
        required: true,
    },

    paymentMode: {
        type: String, 
        required: true,
    },

    mobile: {
        type: String, 
        required: true,
    },

}, {timestamps: true})

module.exports = mongoose.model("Order", Order);