function twitterData(data) {
  let message = data.text.replace(/\shttps.*$/, '');
  if (data.extended_tweet) message = data.extended_tweet.full_text.replace(/\shttps.*$/, '');

  const filteredData = {
    id: data.id,
    text: message,
    city: data.place.full_name,
    name: data.user.screen_name,
    image: data.user.profile_image_url.replace('http', 'https'),
    country: data.place.country,
    coordinates: [
      data.geo.coordinates[0],
      data.geo.coordinates[1]
    ]
  };
  return filteredData;
}

function watsonParameters(message) {
  return {
    text: message,
    features: {
      emotion: {
        document: true
      },
      sentiment: {
        document: true
      }
    }
  };
}

function watsonData(response) {
  const filteredData = {};

  if (response) {
    filteredData.sentiment = {
      score: response.sentiment.document.score,
      label: response.sentiment.document.label
    };

    if (response.emotion) {
      filteredData.emotion = {
        joy: response.emotion.document.emotion.joy,
        fear: response.emotion.document.emotion.fear,
        anger: response.emotion.document.emotion.anger,
        sadness: response.emotion.document.emotion.sadness,
        disgust: response.emotion.document.emotion.disgust
      };
    } else {
      filteredData.emotion = {
        joy: null,
        fear: null,
        anger: null,
        sadness: null,
        disgust: null
      };
    }
  }

  return filteredData;
}

module.exports = {
  twitterData,
  watsonData,
  watsonParameters,
};