function solution(box, n) {
  var answer = 1;
  box.forEach(item => answer *= Math.trunc(item / n));
  return answer;
}