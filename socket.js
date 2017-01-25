const redis = require('redis');
const sub = redis.createClient();
const pub = redis.createClient();

function connectionHandler(connection) {
  connection.emit('message', { payload: 'world' });
  connection.on('chat', function (data) {
    console.log(data);
  });
}

module.exports = connectionHandler;
