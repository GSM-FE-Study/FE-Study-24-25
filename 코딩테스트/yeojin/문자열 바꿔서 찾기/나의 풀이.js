function solution(myString, pat) {
  var answer = '';
  myString.split('').forEach(item => item == 'A' ? answer += 'B' : answer += 'A');
  return answer.includes(pat) ? 1 : 0;
}