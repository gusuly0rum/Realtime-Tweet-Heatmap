class Analytics {
  constructor() {
    this.setupBottomNav();
  }

  setupBottomNav() {
    const bottomNav = document.getElementById('bottom-nav');
    const logos = bottomNav.querySelector('.logos');
    const github = logos.querySelector('.github-logo');
    const linkedin = logos.querySelector('.linkedin-logo');

    github.addEventListener('click', () => {
      window.analytics.track(
        'Click GitHub', { date: new Date() }
      );
    });

    linkedin.addEventListener('click', () => {
      window.analytics.track(
        'Click LinkedIn', { date: new Date() }
      );
    });
  }
}

new Analytics();