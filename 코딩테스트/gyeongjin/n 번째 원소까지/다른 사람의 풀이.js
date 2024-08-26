function solution(num_list, n) {
  var answer = [];
  answer = num_list.filter((num, index) => index < n);
  return answer;
}
