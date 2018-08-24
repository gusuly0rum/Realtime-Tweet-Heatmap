// frontend -> server -> twitter (connections made by socket) (install socket on server and client)

const Key = require('./key');
const Twitter = require('twitter');
const Express = require('express');
const Socket = require('socket.io');

const app = Express();
const server = app.listen(3000);
app.use(Express.static('public'));
const io = Socket(server);

const twitter = new Twitter({
  consumer_key: Key.CONSUMER_KEY,
  consumer_secret: Key.CONSUMER_SECRET,
  access_token_key: Key.ACCESS_TOKEN_KEY,
  access_token_secret: Key.ACCESS_TOKEN_SECRET
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

  socket.on('begin stream', function () {
    let count = 0;
    const area = { locations: '-180, -90, 180, 90' };
    const stream = twitter.stream('/statuses/filter', area);

    stream.on('data', function(data) {
      if (data.geo && data.place) {
        count++;
        socket.emit('filteredData', filterData(data));
        if (count === 1) stream.destroy();
      }
    });
  });
});