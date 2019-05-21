var SequelizeAuto = require('sequelize-auto')
var config = require('./config/db')

var auto = new SequelizeAuto(config.database, config.user, config.pass, {
    host: config.host,
    dialect: config.dialect,
    directory: './models',
    port: config.port,
    additional: {
        timestamps: false,
        freezeTableName: true
    }
})

auto.run(function (err) {
    if (err) throw err;

    //以下创建带自动创建时间戳
    var autoCreateTime = new SequelizeAuto(config.database, config.user, config.pass, {
        host: config.host,
        dialect: config.dialect,
        directory: './models',
        port: config.port,
        additional: {
            timestamps: true,
            freezeTableName: true,
            createdAt: 'create_time',
            updatedAt: false,
            deletedAt: false
        },
        tables: ['activity_room', 'browsing_history', 'comment', 'discover', 'diy_product', 'image_collection', 'image_detail', 'image_detail2019', 'internal_order', 'maggie_album', 'movement', 'praise_info', 'tag_info', 'user_login_info']
    })

    autoCreateTime.run(function (err) {
        if (err) throw err;
        console.log('创建自动添加时间戳', auto.tables); // table list
    });

});

