function solution(num_list) {
  var answer = 0;
  let i = 0;
  while (i < num_list.length) {
    if (num_list[i] < 0) {
      return i;
    }
    i++;
  }
  return -1;
}
