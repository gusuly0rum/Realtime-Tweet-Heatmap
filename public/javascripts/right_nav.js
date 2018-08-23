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
    if (this.rightNavElement.childNodes.length === 6) {
      this.removeTweet();
    } else {
      this.appendTweet(data);
    }
    this.total++;
    this.updateTotal();
    this.rightNavElement.appendChild(this.container);
  }

  removeTweet() {
    const tweetIndexItem = this.container.childNodes[1];
    this.container.removeChild(tweetIndexItem);
  }

  appendTweet(data) {
    const indexItem = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('div');
    const text = document.createElement('div');

    image.src = data.image;
    name.innerHTML = data.name;
    text.innerHTML = data.text;

    indexItem.className = 'tweet-item';
    image.className = 'image';
    name.className = 'name';
    text.className = 'text';

    indexItem.appendChild(image);
    indexItem.appendChild(name);
    indexItem.appendChild(text);
    this.container.appendChild(indexItem);
  }
}

window.rightNav = new RightNav();