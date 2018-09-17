const Twitter = require('twitter');
const Express = require('express');
const Socket = require('socket.io');
const Key = require('./config/key');

const app = Express();
const server = app.listen(process.env.PORT || 3000);
app.use(Express.static('public'));
const io = Socket(server);

const twitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY || Key.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET || Key.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY || Key.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET || Key.ACCESS_TOKEN_SECRET
});

function filterData(data) {
  let message = data.text.replace(/\shttps.*$/, '');
  if (data.extended_tweet) message = data.extended_tweet.full_text.replace(/\shttps.*$/, '');
  const filteredData = {
    id: data.id,
    text: message,
    city: data.place.full_name,
    name: data.user.screen_name,
    image: data.user.profile_image_url,
    country: data.place.country,
    coordinates: [
      data.geo.coordinates[0],
      data.geo.coordinates[1]
    ]
  };
  return filteredData;
}

io.sockets.on('connection', function(socket) {
  socket.emit('connection');

  socket.on('begin stream', function() {
    const search = { locations: '-180, -90, 180, 90' };

    let count = 0;
    twitter.stream('/statuses/filter', search, function(stream) {
      stream.on('data', function(data) {
        if (data.geo && data.place) {
          socket.emit('filteredData', filterData(data));
          if (++count === 5) stream.destroy();
        }
      });
    });
  });
});