function solution(num_str) {
  var answer = 0;
  num_str.split("").forEach(item => answer += +item);
  return answer;
}