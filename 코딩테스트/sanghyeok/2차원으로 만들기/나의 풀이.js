function solution(num_list, n) {
  var answer = [];
  let array = [];
  for (let i = 0; i < num_list.length; i++) {
    array.push(num_list[i]);
    console.log(i);
    if ((i + 1) % n === 0) {
      answer.push(array);
      array = [];
    }
  }
  return answer;
}
