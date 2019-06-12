function getFirst(arr) {
  return arr.shift(arr);
}

function getLast(arr) {
  return arr.slice(-1)[0];
}

module.exports = {
  getFirst,
  getLast
};
