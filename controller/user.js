var sequelize = require('../db/mysql').sequelize

var userModel = sequelize.import('../models/user_login_info')
var historyModel = sequelize.import('../models/browsing_history')

class User{
    constructor(){

    }

    /**
     * 添加用户信息
     */
    add(req, res, next){
        req.checkBody('union_id', 'union_id can not be empty !').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        userModel.create(req.body).then(result => {
            res.status(200).json(result)
        })
    }

    /**
     * 更新用户信息
     */
    update(req, res, next){
        req.checkBody('union_id', 'union_id can not be empty !').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        userModel.update(req.body, {
            where: {
                union_id: req.body.union_id
            }
        }).then(result => {
            res.status(200).json(result)
        })
    }

    /**
     * 通过union_id获取用户信息
     */
    getViaUnionId(req, res, next){
        req.checkQuery('union_id', 'union_id can not be empty !').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        userModel.findOne({
            where: {
                union_id: req.query.union_id,
            },
            attributes: {
                exclude: ['specific_date', 'fake', 'type', 'portrait_url', 'Remarks1', 'Remarks2', 'Remarks3', 'Remarks4']
            }
        }).then(result => {
            res.status(200).json(result)
        })
    }

    /**
     * 添加浏览记录
     */
    addRoomRecord(req, res, next){
        req.checkBody('union_id', 'union_id can not be empty !').exists()
        req.checkBody('activity_id', 'activity_id can not be empty !').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        historyModel.findOne({
            where: {
                union_id: req.body.union_id,
                activity_id: req.body.activity_id
            }
        }).then(result => {
            if(!result){
                historyModel.create(req.body)
            }else{
                historyModel.update({
                    create_time: new Date()
                },{
                    where: {
                        union_id: req.body.union_id,
                        activity_id: req.body.activity_id
                    }
                })
            }
            res.status(200).json('ok')
        })
    }

    /**
     * 查看用户浏览记录
     */
    listRoomRecord(req, res, next){
        req.checkQuery('union_id', 'union_id can not be empty !').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        var page = req.query.page ? req.query.page : 1
        var size = req.query.size ? req.query.size : 10
        historyModel.findAndCountAll({
            limit: size,
            offset: (page - 1)*size,
            where: {
                union_id: req.query.union_id
            }
        }).then(result => {
            res.status(200).json(result)
        })
    }
}

module.exports = new User()