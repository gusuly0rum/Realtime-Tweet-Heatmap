class RightNav {
  constructor() {
    this.total = 0;
    this.rightNavElement = document.getElementById('right-nav');
    this.container = this.rightNavElement.getElementsByClassName('container')[0];
    this.totalContainer = this.rightNavElement.getElementsByClassName('total')[0];
    this.totalContainer.innerHTML = `Total: ${this.total}`;
  }

  updateTotal() {
    this.totalContainer.innerHTML = `Total: ${this.total}`;
  }

  updateIndex(data) {
    if (this.container.childNodes.length === 5) {
      this.removeTweet();
    } else {
      this.appendTweet(data);
    }
    this.total++;
    this.updateTotal();
    this.rightNavElement.appendChild(this.container);
  }

  removeTweet() {
    const tweetIndexItem = this.container.childNodes[0];
    this.container.removeChild(tweetIndexItem);
  }

  appendTweet(data) {
    const indexItem = document.createElement('div');
    const content = document.createElement('div');
    const inform = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('div');
    const city = document.createElement('div');
    const text = document.createElement('div');

    image.src = data.image;
    name.innerHTML = data.name;
    city.innerHTML = 'Unknown';
    if (data.city) city.innerHTML = data.city;
    text.innerHTML = `${data.text}`;

    indexItem.className = 'tweet-item';
    content.className = 'content';
    inform.className = 'inform';
    image.className = 'image';
    name.className = 'name';
    city.className = 'city';
    text.className = 'text';

    content.appendChild(image);
    content.appendChild(inform);
    inform.appendChild(name);
    inform.appendChild(city);
    indexItem.appendChild(content);
    indexItem.appendChild(text);
    this.container.appendChild(indexItem);
  }
}

window.rightNav = new RightNav();