var express = require('express')
var router = express.Router()

var Image = require('../controller/image')
var Praise = require('../controller/praise')

router.post('/upload',Image.init, Image.info, Image.thumb, Image.watermark, Image.save)
router.get('/list', Image.getViaActivityId)
router.post('/praise', Praise.add)

  
module.exports = router;