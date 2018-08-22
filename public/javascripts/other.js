

// http.createServer(function (request, response) {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello Node.js\n');
// }).listen(8124, "127.0.0.1");

// console.log('Server running at http://127.0.0.1:8124/');

// const params = { screen_name: 'nodejs' };
// client.get('statuses/sample', params, function (error, tweets, response) {
//   if (!error) console.log(tweets);
// });

// Twitter.stream('filter', { track: 'dog' }, function (stream) {
//   stream.on('data', function (data) {
//     console.log(data.text);
//   });
// });
// const client = new twitter({
//   consumer_key: 'z8KMxCJPY1yaibEMOPkc6y3iG',
//   consumer_secret: 'ycjcJ0NaAv5UZPfHnD5AmgzAoYcW38Frh3gLVOa5S5WeDr1W8B',
//   bearers_token: 'AAAAAAAAAAAAAAAAAAAAAKGQ8AAAAAAAzyO9xn2N1GPT2HiQRmjG1Hr3vtk%3DVBR4MFHNKRKkbc37FOQ5eVcqyNyIRXpeKek5f1zV3KyXzlYYj1',
// });



// const area = { locations: '-180, -90, 180, 90' };
// const stream = twitter.stream('/statuses/filter', area);
// console.log('twitter-server connection success');

// stream.on('data', function (tweet) {
//   if (tweet.coordinates) {
//     const coords = { lat: tweet.coordinates[0], lng: tweet.coordinates[1] };
//     console.log(tweet);
//     stream.destroy();
//     process.exit(0);
//   }
// });
