const express = require('express');
const router = express.Router();
const { addProduct, getProduct, deleteProduct } = require('../controller/Product')

// route to add product 
router.post('/', addProduct);

// route to get product 
router.get('/', getProduct);

// route to delete product 
router.post('/:id', deleteProduct);

module.exports = router;