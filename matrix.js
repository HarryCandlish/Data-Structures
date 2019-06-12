function getMatrix(n) {
  var matrix = new Array(n);
  matrix.fill(new Array(n));
  matrix.forEach(row => row.fill(0));
  return matrix;
}

function updateMatrix(matrix, coords, value) {
  var row = coords[0];
  var col = coords[1];
  matrix[row][col] = value;
  return matrix;
}

module.exports = {
  getMatrix,
  updateMatrix
};
