var redis = require('../db/redis')

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
        console.log(key);
        console.log(req.body.union_id);
        console.log(redis.sismember(key, req.body.union_id))
        
        // if(){
        //     return res.status(201).end('您已经点赞')
        // }
        // redis.sadd(key, req.body.union_id)
        return res.status(201).end('点赞成功')
    }

}

module.exports = new Praise()