class LeftNav {
  constructor() {
    this.indexItems = {};
  }

  updateIndex(data) {
    if (this.indexItems[data.country]) {
      this.indexItems[data.country]++;
    } else {
      this.indexItems[data.country] = 0;
    }
    const leftNavElement = document.getElementById('left-nav');
    const indexItem = document.createElement('div');
    const country = document.createElement('div');
    const count = document.createElement('div');
    indexItem.className = 'country-item';
    country.className = 'country';
    count.className = 'count';
    indexItem.appendChild(country);
    indexItem.appendChild(count);
    leftNavElement.appendChild(indexItem);
  }
}

window.leftNav = new LeftNav();