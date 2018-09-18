const Twitter = require('twitter');
const Express = require('express');
const Socket = require('socket.io');
const Key = require('./config/key');
const Filter = require('./helper/filter');
const nluV1 = require('watson-developer-cloud/natural-language-understanding/v1');

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

const watson = new nluV1({
  version: '2018-03-16',
  username: process.env.USERNAME || Key.USERNAME,
  password: process.env.PASSWORD || Key.PASSWORD
});

io.sockets.on('connection', function(socket) {
  socket.emit('connection');

  socket.on('begin stream', function() {
    const search = { locations: '-180, -90, 180, 90' };

    // let count = 0;
    twitter.stream('/statuses/filter', search, function(stream) {
      stream.on('data', function(data) {

        if (data.geo && data.place) {
          const tweetData = Filter.twitterData(data);
          const parameters = Filter.watsonParameters(tweetData.text);

          watson.analyze(parameters, function (_, response) {
            const analyzedData = Filter.watsonData(response);
            const filteredData = Object.assign({}, tweetData, analyzedData);
            socket.emit('filteredData', filteredData);
          });

          // if (++count === 1) stream.destroy();
        }
      });
    });
  });
});