function solution(arr, intervals) {
  var answer = [];
  intervals.forEach(item => answer.push(arr.slice(item[0], item[1]+1)));
  return answer[0].concat(answer[1]);
}