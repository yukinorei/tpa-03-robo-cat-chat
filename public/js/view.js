import { appendChildren } from './dom-util.js';

const createPostImage = function(imageUrl) {
  const imgEl = document.createElement('IMG');
  imgEl.src = imageUrl;
  imgEl.addEventListener('load', () => {
    document.querySelector('.add-post-btn').scrollIntoView();
  });
  return imgEl;
};

const createPostPhrase = function(phrase) {
  const phraseEl = document.createElement('P');
  phraseEl.innerText = phrase;
  return phraseEl;
};

const renderPost = function(robotThumbUrl, catThumbUrl, catChatPhrase) {
  const containerEl = document.querySelector('#container .chats');
  const postFrameEl = document.createElement('DIV');

  const robotThumbEl = createPostImage(robotThumbUrl);
  const catThumbEl = createPostImage(catThumbUrl);
  const catChatPhraseEl = createPostPhrase(catChatPhrase);

  appendChildren(postFrameEl, robotThumbEl, catThumbEl, catChatPhraseEl);
  containerEl.appendChild(postFrameEl);
};

const initDOMAndListeners = function(addPostCallback) {
  const addPostBtn = document.querySelector('#container .add-post-btn');
  addPostBtn.addEventListener('click', addPostCallback);
};

export {
  initDOMAndListeners,
  renderPost,
};
