var sequelize = require('../db/mysql').sequelize
var multer = require('multer')
var path = require('path')
var config = require('../config/upload').image;
var fs = require('fs')
var gm = require('gm')
var async = require('async')

var ImageModel = sequelize.import('../models/image_detail')

class Image{

    constructor(){

    }

    /**
     * 初始化：设置保存规则/过滤规则等 符合要求的图片会被保存在指定位置,图片信息保存在req.files下
     */
    init(req, res, next){
        //uuid工具可以生成唯一标示 需要安装
        var UUID = require('uuid')
        //设置保存规则
        var storage = multer.diskStorage({
            //destination：字段设置上传路径，可以为函数
            destination: path.resolve(__dirname, '..', config.path),

            //filename：设置文件保存的文件名
            filename: function(req, file, cb) {
                let extName = file.originalname.slice(file.originalname.lastIndexOf('.'))
                let fileName = UUID.v1()
                cb(null, fileName + extName)
            }
        })

        //设置过滤规则（可选）
        var imageFilter = function(req, file, cb){
            var acceptableMime = config.mimeType
            if(acceptableMime.indexOf(file.mimetype) !== -1){
                cb(null, true)
            }else{
                cb(null, false)
            }
        }

        //设置限制（可选）
        var imageLimit = {
            fieldSize: config.limit
        }

        /**
         * multer({...}).array(config.field, 12) 返回一个node中间件，所以需要将 req, res, next 作为参数传入
         */
        multer({ 
            storage: storage,
            fileFilter: imageFilter,
            limits: imageLimit
        }).array(config.field, 12)(req, res, next)    //定义表单字段、数量限制
    }

    /**
     * 获取宽高信息
     */
    info(req, res, next){
        var begin = Date.now()
        async.eachLimit(req.files, 5, function(file, callback){
            gm(file.path).size((err, size) => {
                if(err) new Error(err)
                file.height = size.height
                file.width = size.width
                callback(null)
            })
        }, function(err){
            if(err) new Eroor(err)
            var end = Date.now()
            console.log('获取信息耗时(毫秒)：', end - begin);
            return next()
        })
    }

    /**
     * 生成水印
     */
    watermark(req, res, next){
        var begin = Date.now()
        async.eachLimit(req.files, 5, function(file, callback){
            let fontSize = Math.floor(file.width / 30) > 14 ? Math.floor(file.width / 30) : 14
            gm(file.path)
                .stroke("#ffffff")
                .font(path.resolve(__dirname, '../public/font/wanzi.ttf'),  fontSize)
                .fill("#CCCCCC")
                .drawText(file.width - fontSize * 6, file.height - 50, "watermark")
                .write(file.path, function (err) {
                    if (err) new Error(err)
                    callback(null)
                })
        }, function(err){
            if(err) new Eroor(err)
            var end = Date.now()
            console.log('生成水印耗时(毫秒)：', end - begin);
            return next()
        })
    }

    /**
     * 生成缩略图
     */
    thumb(req, res, next){
        var begin = Date.now()
        async.eachLimit(req.files, 5, function(file, callback){
            var thumbUrl = file.destination + path.sep + file.filename.replace('.', '_thumb.')
            gm(file.path).resize(640, 640).write(thumbUrl, function(err) {
                if(err) new Error(err)
                file.thumbUrl = thumbUrl
                callback(null)
            })
        }, function(err){
            if(err) new Eroor(err)
            var end = Date.now()
            console.log('生成缩略图耗时(毫秒)：', end - begin);
            return next()
        })
    }

    /**
     * 上传图片
     */
    save(req, res, next){
        req.checkBody('union_id', 'union_id can not be empty').exists()
        req.checkBody('activity_id', 'activity_id can not be empty').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        var data = []
        req.files.forEach(file => {
            data.push({
                union_id: req.body.union_id,
                activity_id: req.body.activity_id,
                file_name: file.filename,
                pic_id: file.filename,
                pic_url: config.path.replace('public', '') + '/' + file.filename,
                thumbnail_url: config.path.replace('public', '') + '/' + file.filename.replace('.','_thumb.'),
                thumbnail_url2: config.path.replace('public', '') + '/' + file.filename.replace('.','_thumb.'),
                pic_height: file.height,
                pic_width: file.width,
                file_size: file.size,
                state: 0
            })
        })
        ImageModel.bulkCreate(data).then(result => {
            res.status(200).json(result)
        })
    }

    /**
     * 拿取房间图片
     */
    getViaActivityId(req, res, next){
        req.checkQuery('activity_id', 'activity_id can not be empty').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        var page = parseInt(req.query.page) == NAN ? 1 : parseInt(req.query.page)
        var size = parseInt(req.query.size) == NAN ? 10 : parseInt(req.query.size)

        ImageModel.findAndCountAll({
            limit: size * 1,
            offset: (page - 1)*size,
            where: {
                activity_id: req.query.activity_id,
                state: 0
            },
            order: [['create_time', 'DESC']],
            attributes: {
                exclude: ['exif', 'thumbnail_url2', 'Remarks', 'state', 'job_id', 'scenes', 'type', 'user_phone']
            }
        }).then(result => {
            res.status(200).json(result)
        })
    }

}

module.exports = new Image()