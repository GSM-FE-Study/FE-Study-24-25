function solution(myString) {
  var answer = [];
  myString.split('x').forEach(item => answer.push(item.length));
  return answer;
}