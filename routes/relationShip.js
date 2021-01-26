var express = require('express');
var router = express.Router();
const relationShipController = require('../controller/relationShip')


router.post('/relationship', relationShipController.createRelationShip)

module.exports = router;