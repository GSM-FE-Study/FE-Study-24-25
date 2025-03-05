function solution(n) {
  let arr = [];
  var answer = 0;
  n += '';
  arr = n.split('');
  arr.forEach(num => answer += +num);
  return answer;
}