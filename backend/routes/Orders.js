const express = require('express');
const router = express.Router();
const { confirmOrder, getOrdersToAdmin, placeOrder } = require('../controller/Orders');

router.post('/', confirmOrder);
router.get('/', getOrdersToAdmin);
router.post('/:id', placeOrder);

module.exports = router;