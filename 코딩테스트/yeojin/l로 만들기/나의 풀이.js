function solution(myString) {
  var answer = '';
  myString = myString.split("")
  myString.forEach(item => item < "l" ? answer += "l" : answer += item);
  return answer;
}