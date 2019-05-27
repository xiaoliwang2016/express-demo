var sequelize = require('../db/mysql').sequelize
var Sequelize = require('../db/mysql').Sequelize

var CommentModel = sequelize.import('../models/comment')

class Commentary{

    constructor(){

    }
    
    /**
     * 添加评论
     */
    add(type){
        return function(req, res, next){
            req.checkBody('union_id', 'union_id can not be empty').exists()
            req.checkBody('topic_id', 'topic_id can not be empty').exists()
            req.checkBody('content', 'content can not be empty').isLength({min: 1, max: 2000})
            req.sanitizeBody('reply_to').toInt()
            var errors = req.validationErrors()
            if(errors){
                return res.status(422).json(errors)
            }
            CommentModel.create({
                union_id: req.body.union_id,
                topic_id: req.body.topic_id,
                content: req.body.content,
                reply_to: req.body.reply_to ? req.body.reply_to : 0,
                type: type
            }).then(result => {
                res.status(200).json(result)
            })
        }
    }

    /**
     * 列出评论
     */
    list(topic_id){
        var key = 'praise_' + pid_id.replace('.', '')
    }
}

module.exports = new Commentary()