var express = require('express')
var router = express.Router()
var Image = require('../controller/image')

router.post('/upload',Image.init, Image.info, Image.thumb, Image.watermark, Image.save)
router.get('/list', Image.getViaActivityId)

  
module.exports = router;