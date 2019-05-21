var express = require('express')
var router = express.Router()
var Room = require('../controller/room')
var { body } = require('express-validator/check')

router.get('/list', Room.list)
router.post('/add', Room.add)
  
module.exports = router;