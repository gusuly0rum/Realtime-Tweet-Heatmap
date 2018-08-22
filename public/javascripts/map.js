class Map {
  constructor() {
    this.markers = {};
  }

  initialize() {
    const mapElement = document.getElementById('map');
    const centerCoordinates = { lat: 20.397, lng: 130.644 };
    const mapOptions = { center: centerCoordinates, zoom: 2.2, styles: window.style, disableDefaultUI: true };
    this.map = new window.google.maps.Map(mapElement, mapOptions);
  }

  updateMarkers(data) {
    const markerOptions = { position: data.coordinates, map: this.map };
    const marker = new window.google.maps.Marker(markerOptions);
    this.markers[data.id] = marker;
  }
}

window.map = new Map();
window.map.initialize();