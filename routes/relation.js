var express = require('express');
var router = express.Router();
const relationController = require('../controller/relation')


router.post('/relation', relationController.createRelation)

module.exports = router;