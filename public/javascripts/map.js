class Map {
  constructor() {
    this.markers = {
      radius: 9,
      opacity: 0.7,
      gradient: window.gradient,
      data: new window.google.maps.MVCArray()
    };
    this.mapOptions = {
      zoom: 2.2,
      styles: window.style,
      disableDefaultUI: true,
      center: { lat: 0, lng: 151 }
    };
    this.initialize();
  }

  initialize() {
    const mapElement = document.getElementById('map');
    this.map = new window.google.maps.Map(mapElement, this.mapOptions);
    this.heatmap = new window.google.maps.visualization.HeatmapLayer(this.markers);
    this.heatmap.setMap(this.map);
  }

  updateMarkers(data) {
    const marker = new window.google.maps.LatLng(...data.coordinates);
    this.markers.data.push(marker);
    const flash = new window.google.maps.Marker({
      position: {
        lat: data.coordinates[0],
        lng: data.coordinates[1]
      },
      map: this.map,
      icon: '../stylesheets/twitter.png'
    });
    setTimeout(() => flash.setMap(null), 500);
  }
}

window.map = new Map();