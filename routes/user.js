var express = require('express');
var router = express.Router();
var User = require('../controller/user')

router.post('/add', User.add)
router.post('/update', User.update)
router.get('/info', User.getViaUnionId)
router.post('/addRecord', User.addRoomRecord)
router.get('/getRecord', User.listRoomRecord)

module.exports = router;
