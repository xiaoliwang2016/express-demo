var sequelize = require('../db/mysql').sequelize
var Sequelize = require('../db/mysql').Sequelize

var roomModel = sequelize.import('../models/activity_room')
var userModel = sequelize.import('../models/user_login_info')

roomModel.belongsTo(userModel, {foreignKey: 'union_id', targetKey: 'union_id', as: 'user'})

class Room{
    constructor(){
        Room.hiddenField = ['create_time']
    }

    list(req, res, next){
        roomModel.findAll({ 
            limit: 10, 
            order: [['create_time', 'DESC']]
        }).then(data => {
            res.send(data)
        })
    }

    getListViaUnionId(req, res, next){
        req.checkQuery('union_id', 'union_id can not be empty').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        roomModel.findAll({
            where: {
                union_id: req.query.union_id
            },
            include: {
                model: userModel, // 关联查询
                as: 'user'
            }
        }).then(result => {
            res.status(200).json(result)
        })
    }

    getInfoViaActivityId(req, res, next){
        req.checkQuery('activity_id', 'activity_id can not be empty').exists()
        var errors = req.validationErrors()
        if(errors){
            return res.status(422).json(errors)
        }
        roomModel.findOne({
            where: {
                activity_id: req.query.activity_id
            }
        }).then(result => {
            res.status(200).json(result)
        })
    }

    add(req, res, next){
        req.checkBody('activity_name', 'activity_name can not be empty').exists()
        req.checkBody('union_id', 'union_id can not be empty').exists()
        var errors = req.validationErrors()
        if (errors) {
            return res.status(422).json(errors);
        }
        req.body.activity_id = 'hc-f-' + Math.floor(Math.random() * 1000000).toString()
        req.body.start_time = new Date()
        req.body.end_time = new Date(Date.now() + 3600 * 24 * 1000 * 7)
        roomModel.create(req.body).then(result => {
            return res.status(200).json(result)
        })
    }

    update(req, res, next){
        req.checkBody('activity_id', 'activity_id can not be empty').exists()
        var errors = req.validationErrors()
        if (errors) {
            return res.status(422).json(errors);
        }
        roomModel.update(req.body, {
            where: {
                activity_id: req.body.activity_id
            }
        }).then(result => {
            return res.status(200).json(result)
        })
    }

}

module.exports = new Room()