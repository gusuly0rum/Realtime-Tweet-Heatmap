class LeftNav {
  constructor() {
    this.indexItems = {};
    this.leftNavElement = document.getElementById('left-nav');
    this.container = this.leftNavElement.querySelector('.container');
    const timeContainer = this.leftNavElement.querySelector('.time-sub');
    const elapsedContainer = this.leftNavElement.querySelector('.elapsed-sub');
    timeContainer.innerHTML = `Since: ${this.visitTime()}`;
    elapsedContainer.innerHTML = `Elapsed: 00:00:00`;
  }

  visitTime() {
    this.currentDate = new Date();
    return this.currentDate.toLocaleTimeString();
  }

  elapsedTime() {
  }

  updateIndex(data) {
    const countryName = data.country;
    if (this.indexItems[countryName]) {
      this.handleOldCountry(countryName);
    } else {
      if (Object.keys(this.indexItems).length === 17) this.removeMinCountry();
      this.handleNewCountry(countryName);
    }
    this.render();
  }

  handleOldCountry(countryName) {
    const tweetCount = ++this.indexItems[countryName].count;
    const indexItem = document.getElementById(countryName);
    const count = indexItem.querySelector('.count');
    count.innerHTML = tweetCount;
    this.indexItems[countryName].nodeElement = indexItem;

    if (countryName === window.clickedCountry) {
      window.bottomNav.render(countryName);
    }
  }

  handleNewCountry(countryName) {
    this.indexItems[countryName] = { count: 1, nodeElement: null };

    const indexItem = document.createElement('div');
    const country = document.createElement('div');
    const count = document.createElement('div');
    
    country.addEventListener('click', () => {
      window.bottomNav.render(countryName);
      window.clickedCountry = countryName;
    });

    indexItem.id = countryName;
    indexItem.className = 'country-item';
    country.className = 'country';
    count.className = 'count';

    country.innerHTML = countryName;
    count.innerHTML = 1;

    indexItem.appendChild(country);
    indexItem.appendChild(count);
    indexItem.style.cursor = 'pointer';
    this.indexItems[countryName].nodeElement = indexItem;
  }

  removeMinCountry() {
    const minCountry = this.sortNames()[16];
    delete this.indexItems[minCountry];
  }

  sortNames() {
    const countryNames = Object.keys(this.indexItems);
    return countryNames.sort((countryA, countryB) => {
      return this.indexItems[countryB].count - this.indexItems[countryA].count;
    });
  }

  render() {
    this.container.innerHTML = null;
    this.sortNames().forEach(country => {
      this.container.appendChild(this.indexItems[country].nodeElement);
    });
    this.leftNavElement.appendChild(this.container);
  }
}

window.leftNav = new LeftNav();