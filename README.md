# Realtime Twitter Feed Heatmap

## Background and Overview
Realtime Twitter Feed Heatmap is a data visualization application that displays tweeting activity in realtime. Tweets around the world are shown as datapoints on a map. Contents of tweets are also processed through a sentiment analyzer.

[Realtime Twitter Feed Heatmap (Live Link)](https://realtime-twitter-feed-heatmap.herokuapp.com/)

![All](./wiki/all.png)

## Technologies
* Node.js (Backend logic)
* Websockets (Backend logic, clientside logic)
* Vanilla JS (frontend DOM manipulation)
* Twitter API (API requests to retrieve tweeting data)
* IBM Watson API (API requests for sentiment analysis)
* Google Maps API (Map and data visualization)


## Tweet Feed
The realtime tweets from people around the globe is shown along with the profile picture, username, location and tweet content. The tweet content in it's raw json value form contained information such as the original link. However, this was removed by using a regular expression.
```
const message = data.text.replace(/\shttps.*$/, '');
```
![Right](./wiki/right.png)


## Tweets by Country Statistics
The number of tweets by country since visiting the website is shown. The tweet count per country is also ranked using a fast sorting algorithm by manipulating the DOM nodes.
```
render() {
  const sortedCountries = this.sortNames();
  sortedCountries.forEach(country => {
    this.container.appendChild(this.indexItems[country].nodeElement);
  });
  this.leftNavElement.appendChild(this.container);
}
```
![Left](./wiki/left.png)


## Heatmap of Tweeting Activity
The realtime tweets received from the Twitter API were rendered as datapoints on the Google Maps API updating the map. Two different datapoints were used: (i) one showing the accumulation of all tweets and (ii) another one showing the current tweets (installed a expiration date to disappear after a certain time).
```
updateMarkers(data) {
  const marker = new window.google.maps.LatLng(...data.coordinates);
  this.markers.data.push(marker);
  let flash = new window.google.maps.Marker({
    position: {
      lat: data.coordinates[0],
      lng: data.coordinates[1]
    },
    map: this.map,
    icon: '../stylesheets/twitter1.png'
  });
  setTimeout(() => flash.setMap(null), 500);
}
```
![Map](./wiki/map.png)