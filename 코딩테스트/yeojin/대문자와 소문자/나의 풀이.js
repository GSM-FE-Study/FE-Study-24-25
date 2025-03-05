function solution(my_string) {
  var answer = '';
  my_string.split('').forEach(item => answer += (item >= 'a' && item <= 'z') ? item.toUpperCase() : item.toLowerCase())
  return answer;
}