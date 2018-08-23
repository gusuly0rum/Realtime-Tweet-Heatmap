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
    this.render();
  }

  handleOldCountry(countryName) {
    const tweetCount = ++this.indexItems[countryName].count;
    const indexItem = document.getElementById(countryName);
    const count = indexItem.getElementsByClassName('count')[0];
    count.innerHTML = tweetCount;
    this.indexItems[countryName].nodeElement = indexItem;
  }

  handleNewCountry(countryName) {
    this.indexItems[countryName] = { count: 1, nodeElement: null };

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
    this.indexItems[countryName].nodeElement = indexItem;
  }

  sortNames() {
    const countryNames = Object.keys(this.indexItems);
    return countryNames.sort((elemA, elemB) => {
      return this.indexItems[elemA].count < this.indexItems[elemB].count;
    });
  }

  render() {
    this.sortNames().forEach(country => {
      this.leftNavElement.appendChild(this.indexItems[country].nodeElement);
    });
  }
}

window.leftNav = new LeftNav();