class Nav {
  constructor() {
    this.leftContent = {};
    this.rightContent = {};
    this.bottomContent = {};
  }

  updateLeft(data) {
    this.leftContent[data.id] = data.country;
    const leftNavElement = document.getElementById('left-nav');
  }

  updateRight(data) {
    this.rightContent[data.id] = {
      text: data.text,
      name: data.screen_name,
      image: data.profile_image_url
    };
    const rightNavElement = document.getElementById('right-nav');
  }

  updateBottom(data) {
  }
}

window.nav = new Nav();