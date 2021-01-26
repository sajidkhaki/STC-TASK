var express = require('express');
var router = express.Router()
const userController = require('../controller/users')


router.post('/createUser', userController.create)
router.get('/users', userController.getAllPersons)


module.exports = router;
