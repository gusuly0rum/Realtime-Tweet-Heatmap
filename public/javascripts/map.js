class Map {
  constructor() {
    this.markers = {};
  }

  initialize() {
    const mapOptions = {
      zoom: 2.2,
      draggable: false,
      styles: window.style,
      disableDefaultUI: true,
      gestureHandling: 'none',
      center: { lat: 20, lng: 150 }
    };
    const mapElement = document.getElementById('map');
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