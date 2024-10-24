function nextSqaure(n) {
  var root = Math.sqrt(n);
  var result = parseInt(root) - root === 0 ? (root + 1) * (root + 1) : "no";
  return result;
}
