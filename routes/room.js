var express = require('express')
var router = express.Router()
var Room = require('../controller/room')

router.get('/list', Room.list)
router.post('/add', Room.add)
router.post('/update', Room.update)
router.get('/detail', Room.getInfoViaActivityId)
router.get('/ownList', Room.getListViaUnionId)
  
module.exports = router;