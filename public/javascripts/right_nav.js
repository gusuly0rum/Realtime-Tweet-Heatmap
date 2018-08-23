class RightNav {
  constructor() {
    this.rightNavElement = document.getElementById('right-nav');
  }

  updateIndex(data) {
    if (this.rightNavElement.childNodes.length === 6) {
      this.removeTweet();
    } else {
      this.appendTweet(data);
    }
  }

  removeTweet() {
    const tweetIndexItem = this.rightNavElement.childNodes[1];
    this.rightNavElement.removeChild(tweetIndexItem);
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
    this.rightNavElement.appendChild(indexItem);
  }
}

window.rightNav = new RightNav();