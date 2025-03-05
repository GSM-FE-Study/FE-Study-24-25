function solution(n) {
  var a = (n + "").split("");
  var b = 0;
  for (var i = 0; i < a.length; ++i) {
    b += parseInt(a[i]);
  }
  return b;
}
