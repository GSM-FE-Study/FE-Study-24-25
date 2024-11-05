function solution(order) {
  let answer = 0;
  order += '';
  order.split('').map(item => item = +item).forEach(item => ((item !== 0) && (item % 3 == 0)) ? answer++ : answer);
  return answer;
}