const express = require('express');

const { auth } = require ("../middlewares/auth")

const {
    createLink,
    getLinks,
    getLink
} = require('../controller/link');

const router = express.Router();

router 
 .get('/',auth, getLinks)
 .post('/',auth, createLink)
 .get('/:id',auth,  getLink)

 module.exports = router;