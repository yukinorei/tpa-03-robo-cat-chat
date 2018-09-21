// see http://thecatapi.com/
const fetchCatThumbData = function() {
  const apiKey = '3e716ca0-8514-4bf0-bc87-4792a37c3ec0';
  const apiUrl = 'https://api.thecatapi.com/v1/images/search?format=json&size=small';
  const fetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  };
  return fetch(apiUrl, fetchOptions)
    .then(response => response.json());
};

// see https://market.mashape.com/blaazetech/robohash-image-generator
const fetchRobotThumbData = function() {
  const apiKey = 'vdaU35425amshse8ir7sxh0qJqFzp1xAvXIjsnVRIdRQsxES8o';
  const randomText = Math.random().toString(36).substring(2);
  // 'テンプレート文字列': https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/template_strings
  const apiUrl = `https://robohash.p.mashape.com/index.php?text=${randomText}`;
  const fetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      'X-Mashape-Key': apiKey,
      'mode': 'cors',
    },
  };

  return fetch(apiUrl, fetchOptions)
    .then(response => response.json());
};

export {
  fetchCatThumbData,
  fetchRobotThumbData,
};
