var index = require('./index')
var user = require('./user')
var room = require('./room')
var image = require('./image')

module.exports = app => {
    app.use('/', index)
    app.use('/user', user)
    app.use('/room', room)
    app.use('/image', image)
}