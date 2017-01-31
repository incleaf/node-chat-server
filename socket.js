const redis = require('redis');
const sub = redis.createClient();
const pub = redis.createClient();

sub.on('message', (channel, message) => {
  console.log('i\'ve got message!!!!', channel, message);
});

sub.subscribe('chat', function(channel, message) {
  console.log('subscribing...');
  // connection.emit(channel, message);
});

function connectionHandler(connection) {
  connection.on('chat', function(data) {
    // console.log(data);
    pub.publish('chat', JSON.stringify(data));
  });


}

module.exports = connectionHandler;
