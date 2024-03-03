const express = require('express');
const router = express.Router();
const { admin } = require('../controller/Admin');

router.post('/', admin);

module.exports = router;