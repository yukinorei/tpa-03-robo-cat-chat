import { getRandomInt } from './math-util.js';

const catChatPhrases = [
  '可愛いすぎる！',
  'もう可愛くてたまらない〜',
  'なでてあげずにはいられない！',
  'ネコを溺愛している症状：ネコが悪態をつくと、止めるどころか撮影を始めるって',
  '深い深い、海のように深いご縁がありましたね。',
  'いい子、いい子。',
  'にゃんすた',
];
const generateRandomCatChatPhrase = function() {
  const randomIndex = getRandomInt(0, catChatPhrases.length);
  return catChatPhrases[randomIndex];
};

export {
  generateRandomCatChatPhrase,
};
