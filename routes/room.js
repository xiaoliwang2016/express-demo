var express = require('express')
var router = express.Router()
var Room = require('../controller/room')

router.get('/list', Room.list)
router.post('/add', Room.add)
router.get('/info', Room.getInfoByActivityId)
  
module.exports = router;