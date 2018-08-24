# Twitter Feed Heatmap

## Background and Overview
The Twitter Feed Heatmap is a data visualization application that displays tweeting activity in realtime based on geolocation. Tweets around the world will be shown as a datapoint on a map.


## Work Done During the Weekend
Explored possible websites such as:
* GitHub (public feed API service has no location data)
* Twitter (public feed API service has no restrictions)
* Facebook (public feed API service requires approval by Facebook)
* Instagram (public feed API service to be deprecated in December 2018)

Waiting for Twitter developer account application acceptance


## MVPs
- [ ] Display Google maps
- [ ] Display datapoint on map
- [ ] Display Twitter and LinkedIn links on top navbar
- [ ] Display ordered tweet count by country on left navbar
- [ ] Display total per month as a graph on bottom navbar
- [ ] Display data content (profile picture, tweet) on right navbar

## Wireframes
![Wireframe](./wiki/wireframe.png)


## Technologies
* Vanilla JS (Application logic)
* D3 Library (Data visualization)
* Twitter API (Data API requests)
* Google Maps API (Map visualization)


## File Structure
`map.js`  
`main.js`  
`index.html`  
`marker_manager.js`


## Implementation Timeline
### Weekend
- [ ] Investigate feasibility
- [ ] Complete project proposal
- [ ] Apply for Twitter developer account

### Day 1 - Monday
- [ ] Complete environment setup
- [ ] Setup folder structure (entry file, classes and index.html)
- [ ] Setup Google maps component on index.html
- [ ] Be able to render data points on the map
- [ ] Complete Twitter API tutorials
- [ ] Establish access to the Twitter API  
- [ ] Perform successful API request to Twitter DB

### Day 2 - Tuesday
- [ ] Complete data rendering of tweets based on longitude / latitude

### Day 3 - Wednesday
- [ ] Complete left navbar (tweet counts by country)
- [ ] Complete right navbar (tweet content by tweet)
- [ ] Complete bottom navbar (tweet counts by month)

### Day 4 - Thursday
- [ ] Complete styling of map
- [ ] Complete styling of left navbar
- [ ] Complete styling of right navbar
- [ ] Complete styling of bottom navbar


## Bonus Features
* Filter tweets by category
* Filter tweets by keyword