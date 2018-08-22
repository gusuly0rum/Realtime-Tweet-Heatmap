class RightNav {
  constructor() {
    this.indexItems = {};
  }

  updateIndex(data) {
    this.indexItems[data.id] = {
      text: data.text,
      name: data.screen_name,
      image: data.profile_image_url
    };

    const rightNavElement = document.getElementById('right-nav');
    if (rightNavElement.childNodes.length === 5) {
      rightNavElement.removeChild(rightNavElement.childNodes[0]);
    }

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
    rightNavElement.appendChild(indexItem);
  }
}

window.rightNav = new RightNav();