function solution(num_list) {
  var answer = num_list;
  const length = num_list.length;
  num_list[length-1] > num_list[length-2] ?
      answer.push(num_list[length-1] - num_list[length-2]) :
      answer.push(num_list[length-1]*2);
  return answer;
}