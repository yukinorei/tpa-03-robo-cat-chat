/**
 * Gets a random int within a range whose maximum is exclusive
 * and the minimum is inclusive.
 */
const getRandomInt = function(min, max) {
  const range = Math.floor(max) - Math.ceil(min);
  return Math.floor(Math.random() * range) + min;
};

export {
  getRandomInt,
};
