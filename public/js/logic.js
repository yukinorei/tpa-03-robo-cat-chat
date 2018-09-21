import { generateRandomCatChatPhrase } from './phrase-util.js';
import {
  fetchRobotThumbData,
  fetchCatThumbData,
} from './api.js';
import { renderPost } from './view.js';

// "async"キーワードの説明： https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function
const addPost = async function() {
  const chatPhrase = generateRandomCatChatPhrase();
  Promise.all([
    fetchRobotThumbData(),
    fetchCatThumbData(),
  ])
    .then((resultsArray) => {
      const [robotThumb, catThumb] = resultsArray;
      // 注意：上記の表現は「分割代入」と呼びます。
      // 参照：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      renderPost(robotThumb.imageUrl, catThumb[0].url, chatPhrase);
    });
};

export {
  addPost,
};
