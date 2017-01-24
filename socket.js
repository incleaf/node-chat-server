const redis = require('redis');
const sub = redis.createClient();
const pub = redis.createClient();

function connectionHandler(connection) {
  connection.emit('news', { hello: 'world' });
  connection.on('my other event', function (data) {
    console.log(data);
  });
}

module.exports = connectionHandler;
