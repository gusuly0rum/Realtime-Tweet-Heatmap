if (process.env.production_mode === 'on') {
  window.socket = window.io.connect('https://realtime-twitter-feed-heatmap.herokuapp.com/');
} else {
  window.socket = window.io.connect('http://localhost:3000');
}

window.socket.on('connection', function() {
  window.socket.emit('begin stream');
  
  window.socket.on('filteredData', function(filteredData) {
    window.map.updateMarkers(filteredData);
    window.leftNav.updateIndex(filteredData);
    window.rightNav.updateIndex(filteredData);
  });
});