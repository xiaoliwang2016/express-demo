var redis = require("redis")
var client = redis.createClient({
    host: '127.0.0.1',  //默认
    port: 6379     //默认
})

client.on("error", function (err) {
    console.log(err);
})

client.on('ready', function(){
    console.log('redis connect successfully');
})

module.exports = client