var redis = require('../db/redis')
var sequelize = require('../db/mysql').sequelize
var Sequelize = require('../db/mysql').Sequelize
var Op = Sequelize.Op

var UserModel = sequelize.import('../models/user_login_info')

class Praise{

    constructor(){

    }

    /**
     * 新增点赞
     */
    add(req, res, next){
        req.checkBody('union_id', 'union_id can not be empty').exists()
        req.checkBody('pic_id', 'pic_id can not be empty').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        var key = 'praise_' + req.body.pic_id.slice(0, req.body.pic_id.indexOf('.'))
        redis.sismember(key, req.body.union_id, function(err, isExists) {
            if(isExists){
                return res.status(201).end('您已经点赞')
            }
            redis.sadd(key, req.body.union_id)
            return res.status(201).end('点赞成功')
        })
    }

    /**
     * 取消点赞
     */
    cancel(req, res, next){
        req.checkBody('union_id', 'union_id can not be empty').exists()
        req.checkBody('pic_id', 'pic_id can not be empty').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        var key = 'praise_' + req.body.pic_id.replace('.', '')
        redis.srem(key, req.body.union_id, function(err){
            if(err == null){
                return res.status(201).end('取消点赞成功')
            }
        })
    }

    /**
     * 获取点赞列表
     */
    getList(pid_id){
        var key = 'praise_' + pid_id.replace('.', '')
        return new Promise((resolve, reject) => {
            redis.smembers(key, function(err, list){
                if(err) new Error(err)
                UserModel.findAll({
                    where: {
                        union_id: {
                            [Op.in]: list
                        }
                    },
                    attributes: {
                        exclude: ['open_id','country','province','city','language','Remarks1','Remarks2','Remarks3','Remarks4','last_time','id','portrait_url','autograph','fake','specific_date','type']
                    }
                }).then(users => {
                    resolve(users)
                })
            })
        })
    }

}

module.exports = new Praise()