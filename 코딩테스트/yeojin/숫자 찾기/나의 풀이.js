function solution(num, k) {
  num += '';
  k += '';
  var answer = num.split('').findIndex(item => item == k);
  return answer > -1 ? answer + 1 : answer;
}