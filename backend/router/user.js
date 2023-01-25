const express = require('express');

const { auth } = require ("../middlewares/auth")

const {
login,
signup
} = require('../controller/user');

const router = express.Router();

router 
 .get('/',login)
 .post('/', signup)

 module.exports = router;