const socket = window.io.connect('http://localhost:3000');
// const socket = window.io.connect('https://realtime-twitter-feed-heatmap.herokuapp.com/');

socket.on('connection', function() {
  socket.emit('begin stream');
  
  socket.on('filteredData', function(filteredData) {
    window.map.updateMarkers(filteredData);
    window.leftNav.updateIndex(filteredData);
    window.rightNav.updateIndex(filteredData);
    window.bottomNav.updateIndex(filteredData);
  });
});