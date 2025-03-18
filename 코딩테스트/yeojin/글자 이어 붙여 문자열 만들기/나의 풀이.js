function solution(my_string, index_list) {
  var answer = '';
  index_list.forEach(item => {
      answer += (my_string.slice(item, item+1))
  })
  
  return answer;
}