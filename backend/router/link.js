const express = require('express');
const router = express.Router();

const {
    createLink,
    getLinks,
    getLink
} = require('../controller/link');

router 
 .get('/', getLinks)
 .post('/', createLink)
 .get('/:id', getLink)
//  .get('/:id', getBoginoo)
// .put('/:id)', updateBoginoo)

 module.exports = router;