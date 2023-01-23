const express = require('express');

const { auth } = require ("../middlewares/auth")

const {
    createLink,
    getLinks,
    getLink
} = require('../controller/link');

const router = express.Router();

router 
 .get('/', getLinks)
 .post('/', createLink)
 .get('/:id',  getLink)

 module.exports = router;