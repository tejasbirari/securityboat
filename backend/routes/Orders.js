const express = require('express');
const router = express.Router();
const { confirmOrder, getOrdersToAdmin, placeOrder } = require('../controller/Orders');
const { verifyToken } = require('../middleware/TokenValidator')


router.post('/', confirmOrder);
router.get('/', verifyToken, getOrdersToAdmin);
router.post('/:id', verifyToken, placeOrder);

module.exports = router;