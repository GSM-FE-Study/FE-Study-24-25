function solution(str_list, ex) {
  var answer = '';
  str_list.forEach(item => !item.includes(ex) ? answer += item : item);
  return answer;
}