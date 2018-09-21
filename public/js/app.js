import { initDOMAndListeners } from './view.js';
import { addPost } from './logic.js';

const initApp = function() {
  initDOMAndListeners(addPost);
};

export {
  initApp,
};
