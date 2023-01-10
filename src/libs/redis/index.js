const redis = require('redis');

const client = redis.createClient(6379);

const connectToRedis = () => {
  client.connect();
};

module.exports = {
  client,
  connectToRedis,
};
