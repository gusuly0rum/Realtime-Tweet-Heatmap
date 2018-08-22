const socket = window.io.connect('http://localhost:3000');
console.log('socket installation on client-server success');

socket.on('connection', function (sucessResponse) {
  console.log('socket installation on client success');
  socket.emit('begin stream');

  socket.on('filteredData', function (filteredData) {
    console.log('client received data from server');
    console.log(filteredData);
    window.map.updateMarkers(filteredData);
    window.nav.updateLeft(filteredData);
    window.nav.updateRight(filteredData);
    window.nav.updateBottom(filteredData);
  });
});