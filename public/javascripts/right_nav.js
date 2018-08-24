class RightNav {
  constructor() {
    this.total = 0;
    this.rightNavElement = document.getElementById('right-nav');
    this.container = this.rightNavElement.getElementsByClassName('container')[0];
    this.totalContainer = this.rightNavElement.getElementsByClassName('total')[0];
    this.totalContainer.innerHTML = 'Total: 0';
  }

  updateTotal() {
    this.totalContainer.innerHTML = `Total: ${this.total}`;
  }

  updateIndex(data) {
    this.total++;
    this.updateTotal();
    if (this.container.childNodes.length === 6) this.removeTweet();
    this.appendTweet(data);
    this.rightNavElement.appendChild(this.container);
  }

  removeTweet() {
    this.container.removeChild(this.container.firstChild);
  }

  appendTweet(data) {
    const indexItem = document.createElement('div');
    const content = document.createElement('div');
    const inform = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('div');
    const city = document.createElement('div');
    const text = document.createElement('div');

    indexItem.className = 'tweet-item';
    content.className = 'content';
    inform.className = 'inform';
    image.className = 'image';
    name.className = 'name';
    city.className = 'city';
    text.className = 'text';

    image.src = data.image;
    name.innerHTML = data.name;
    city.innerHTML = data.city ? data.city : 'Unknown';
    text.innerHTML = data.text;

    inform.appendChild(name);
    inform.appendChild(city);
    content.appendChild(image);
    content.appendChild(inform);
    indexItem.appendChild(content);
    indexItem.appendChild(text);
    this.container.appendChild(indexItem);
  }
}

window.rightNav = new RightNav();