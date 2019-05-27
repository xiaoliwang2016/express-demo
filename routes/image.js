var express = require('express')
var router = express.Router()

var Image = require('../controller/image')
var Praise = require('../controller/praise')
var Commentary = require('../controller/commentary')

router.post('/upload',Image.init, Image.info, Image.thumb, Image.watermark, Image.save)
router.get('/list', Image.getViaActivityId)
router.get('/detail', Image.getDetail)
router.post('/praise/add', Praise.add)
router.post('/praise/cancel', Praise.cancel)
router.post('/comment/add', Commentary.add(1))

  
module.exports = router;