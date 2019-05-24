var sequelize = require('../db').sequelize
var Sequelize = require('../db').Sequelize

var roomModel = sequelize.import('../models/activity_room')

class Room {
    constructor(){

    }

    list(req, res, next){
        roomModel.findAll({ 
            limit: 10, 
            order: [['create_time', 'DESC']]
        }).then(data => {
            res.send(data)
        })
    }

    async getInfoByActivityId(req, res, next){
        req.checkQuery('activity_id', 'activity_id can not be empty').exists()
        var errors = await req.getValidationResult()
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        res.send(req.query)
        
    }

    async add(req, res, next){
        req.checkBody('activity_name', 'activity_name can not be empty').exists()
        req.checkBody('union_id', 'union_id can not be empty').exists()
        var errors = await req.getValidationResult()
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        req.body.activity = 'hc-f-' + Math.floor(Math.random() * 1000000).toString()
        res.send(req.body)
    }

}

module.exports = new Room()