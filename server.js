// frontend -> server -> twitter (connections made by socket) (install socket on server and client)

const Key = require('./key');
const Twitter = require('twitter');
const Express = require('express');
const Socket = require('socket.io');

const app = Express();
const server = app.listen(3000);
console.log('server is running');

app.use(Express.static('public'));
const io = Socket(server);

const twitter = new Twitter({
  consumer_key: Key.CONSUMER_KEY,
  consumer_secret: Key.CONSUMER_SECRET,
  access_token_key: Key.ACCESS_TOKEN_KEY,
  access_token_secret: Key.ACCESS_TOKEN_SECRET
});

function filterData(data) {
  const filteredData = {
    id: data.id,
    text: data.text,
    name: data.user.screen_name,
    image: data.user.profile_image_url,
    country: data.place.country,
    coordinates: {
      lat: data.geo.coordinates[0],
      lng: data.geo.coordinates[1]
    }
  };
  return filteredData;
}

io.sockets.on('connection', function(socket) {
  console.log(`socket installation on server-twitter success`);
  socket.emit('connection');

  socket.on('begin stream', function() {
    const area = { locations: '-180, -90, 180, 90' };
    const stream = twitter.stream('/statuses/filter', area);
    console.log('twitter-server connection success');

    let count = 0;
    stream.on('data', function(data) {
      console.log('server received data from twitter api');
      if (data.geo && data.place) {
        count++;
        socket.emit('filteredData', filterData(data));
        if (count === 50) {
          stream.destroy();
          // process.exit(0);
        }
      }
    });
  });
  socket.emit('client-server connection success');
});