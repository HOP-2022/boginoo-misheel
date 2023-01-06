const express = require('express');
const router = express.Router();

const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} = require('../controller/user');

router 
 .post('/', createUser)
 .get('/', getUsers)
 .get('/:id', getUser)
 .delete('/:id', deleteUser)
 .put('/:id', updateUser)

 module.exports = router;
 