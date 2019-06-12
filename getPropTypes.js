function getPropTypes(obj) {
  var data = [];
  var keys = Object.keys(obj);
  for (let i = 0; 0 < keys.length; i++) {
    data.push(typeof obj[keys[i]]);
  }
  return data;
}

module.exports = getPropTypes;
