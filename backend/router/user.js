const express = require('express');

const { auth } = require ("../middlewares/auth")

const {
    createUser,
    getUsers,
    getUser
} = require('../controller/user');

const router = express.Router();

router 
 .get('/', auth, getUsers)
 .post('/',  auth, createUser)
 .get('/:id', auth, getUser)

 module.exports = router;