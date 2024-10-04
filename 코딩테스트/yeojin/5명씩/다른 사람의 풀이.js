function solution(names) {

  var answer = names.filter(item => names.indexOf(item) % 5 == 0);
  return answer;
}