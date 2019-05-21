var index = require('./index')
var users = require('./users')
var room = require('./room')

module.exports = app => {
    app.use('/', index)
    app.use('/users', users)
    app.use('/room', room)
}