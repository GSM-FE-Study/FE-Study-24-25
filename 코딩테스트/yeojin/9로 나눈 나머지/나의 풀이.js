function solution(number) {
  var answer = 0;
  number.split('').forEach(item => answer += +item);
  return answer % 9;
}