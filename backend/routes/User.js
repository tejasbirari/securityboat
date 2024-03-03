const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controller/Users')

// route to sign-up user
router.post('/', signUp);

// route to log-up user
router.post('/user', login);

module.exports = router;