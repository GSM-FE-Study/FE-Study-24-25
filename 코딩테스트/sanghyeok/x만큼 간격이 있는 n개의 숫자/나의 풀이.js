function solution(x, n) {
  var answer = [];
  let y = 0;
  for (let i = 0; i < n; i++) {
    answer.push((y += x));
  }
  return answer;
}
