const socket = window.io.connect('http://localhost:3000');

socket.on('connection', function(sucessResponse) {
  socket.emit('begin stream');
  
  socket.on('filteredData', function(filteredData) {
    window.map.updateMarkers(filteredData);
    window.leftNav.updateIndex(filteredData);
    window.rightNav.updateIndex(filteredData);
  });
});
