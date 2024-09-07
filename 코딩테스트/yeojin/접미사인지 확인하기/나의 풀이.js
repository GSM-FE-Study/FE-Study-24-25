function solution(my_string, is_suffix) {
  var answer = 0;
  answer = my_string.includes(is_suffix) ? (my_string.endsWith(is_suffix.slice(-1)) ? 1 : 0 ): 0;
  return answer;
}