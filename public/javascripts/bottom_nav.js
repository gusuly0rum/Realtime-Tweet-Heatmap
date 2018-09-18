class BottomNav {
  constructor() {
    this.indexItems = {};
    this.bottomNavElement = document.getElementById('bottom-nav');
    this.header = this.bottomNavElement.querySelector('.stats').querySelector('.header');
    this.analysis = this.bottomNavElement.querySelector('.analysis');
  }

  updateIndex(data) {
    const countryName = data.country;
    if (this.indexItems[countryName]) {
      this.handleOldCountry(countryName, data);
    } else {
      this.handleNewCountry(countryName, data);
    }
  }

  handleOldCountry(countryName, data) {
    const count = ++this.indexItems[countryName].count;

    const sentiment = this.indexItems[countryName].sentiment;
    sentiment.score = (sentiment.score + data.sentiment.score) / count;
    sentiment.label = sentiment.score < 0 ? 'negative' : 'positive';

    const emotion = this.indexItems[countryName].emotion;
    emotion.joy = (emotion.joy + data.emotion.joy) / count;
    emotion.fear = (emotion.fear + data.emotion.fear) / count;
    emotion.anger = (emotion.anger + data.emotion.anger) / count;
    emotion.sadness = (emotion.sadness + data.emotion.sadness) / count;
    emotion.disgust = (emotion.disgust + data.emotion.disgust) / count;

    this.indexItems[countryName] = {
      sentiment: sentiment,
      emotion: data.emotion,
      count: count
    };
  }

  handleNewCountry(countryName, data) {
    this.indexItems[countryName] = {
      sentiment: data.sentiment,
      emotion: data.emotion,
      count: 1
    };
  }

  render(countryName) {
    const sentiment = document.createElement('div');
    const score = document.createElement('div');
    const label = document.createElement('div');

    const emotion = document.createElement('div');
    const joy = document.createElement('div');
    const fear = document.createElement('div');
    const anger = document.createElement('div');
    const sadness = document.createElement('div');
    const disgust = document.createElement('div');

    sentiment.className = 'sentiment';
    score.className = 'score';
    label.className = 'label';

    emotion.className = 'emotion';
    joy.className = 'joy-emotion';
    fear.className = 'fear-emotion';
    anger.className = 'anger-emotion';
    sadness.className = 'sadness-emotion';
    disgust.className = 'disgust-emotion';


    score.innerHTML = `Overall ${Math.round(this.indexItems[countryName].sentiment.score * 100)}%`;
    label.innerHTML = `${this.indexItems[countryName].sentiment.label}`;

    joy.innerHTML =  `Joy ${(this.indexItems[countryName].emotion.joy * 100).toFixed(2)}%`;
    fear.innerHTML = `Fear ${(this.indexItems[countryName].emotion.fear * 100).toFixed(2)}%`;
    anger.innerHTML = `Anger ${(this.indexItems[countryName].emotion.anger * 100).toFixed(2)}%`;
    sadness.innerHTML = `Sadness ${(this.indexItems[countryName].emotion.sadness * 100).toFixed(2)}%`;
    disgust.innerHTML = `Disgust ${(this.indexItems[countryName].emotion.disgust * 100).toFixed(2)}%`;

    sentiment.appendChild(score);
    sentiment.appendChild(label);

    emotion.appendChild(joy);
    emotion.appendChild(fear);
    emotion.appendChild(anger);
    emotion.appendChild(sadness);
    emotion.appendChild(disgust);

    this.analysis.innerHTML = null;
    this.analysis.appendChild(sentiment);
    this.analysis.appendChild(emotion);

    this.header.innerHTML = `Average Sentiment in ${countryName}`;
  }
}

window.bottomNav = new BottomNav();