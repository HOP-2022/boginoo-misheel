const express = require('express');
const router = express.Router();

const {
    createBoginoo,
    getBoginoo,
    updateBoginoo
} = require('../controller/user');

router 
 .post('/', createBoginoo)
//  .get('/:id', getBoginoo)
// .put('/:id)', updateBoginoo)

 module.exports = router;
 