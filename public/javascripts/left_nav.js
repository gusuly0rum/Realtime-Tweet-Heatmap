class LeftNav {
  
  constructor() {
    this.indexItems = {};
    this.leftNavElement = document.getElementById('left-nav');
    this.container = this.leftNavElement.getElementsByClassName('container')[0];
  }

  updateIndex(data) {
    const countryName = data.country;
    if (this.indexItems[countryName]) {
      this.handleOldCountry(countryName);
    } else {
      if (Object.keys(this.indexItems).length === 22) this.removeLastChild();
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

  removeLastChild() {
    const minCountry = this.sortNames()[22];
    delete this.container[minCountry];
  }

  sortNames() {
    const countryNames = Object.keys(this.indexItems);
    return countryNames.sort((countryA, countryB) => {
      return this.indexItems[countryB].count - this.indexItems[countryA].count;
    });
  }

  render() {
    this.sortNames().forEach(country => {
      this.container.appendChild(this.indexItems[country].nodeElement);
    });
    this.leftNavElement.appendChild(this.container);
  }
}

window.leftNav = new LeftNav();