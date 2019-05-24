var index = require('./index')
var user = require('./user')
var room = require('./room')

module.exports = app => {
    app.use('/', index)
    app.use('/user', user)
    app.use('/room', room)
}