class LeftNav {
  
  constructor() {
    this.indexItems = {};
    this.leftNavElement = document.getElementById('left-nav');
  }

  updateIndex(data) {
    const countryName = data.country;
    if (this.indexItems[countryName]) {
      this.handleOldCountry(countryName);
    } else {
      this.handleNewCountry(countryName);
    }
  }

  handleOldCountry(countryName) {
    const tweetCount = ++this.indexItems[countryName];
    const indexItem = document.getElementById(countryName);
    const count = indexItem.getElementsByClassName('count')[0];
    count.innerHTML = tweetCount;
  }

  handleNewCountry(countryName) {
    this.indexItems[countryName] = 1;

    const indexItem = document.createElement('div');
    const country = document.createElement('div');
    const count = document.createElement('div');

    indexItem.id = countryName;
    indexItem.className = 'country-item';
    country.className = 'country';
    count.className = 'count';

    country.innerHTML = countryName;
    count.innerHTML = 1;

    indexItem.appendChild(country);
    indexItem.appendChild(count);
    this.leftNavElement.appendChild(indexItem);
  }
}

window.leftNav = new LeftNav();


// const indexItems = {
//   'USA': {
//     count: 10,
//     indexItem: <div></div>
//   }
// };