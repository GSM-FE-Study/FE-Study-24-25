function solution(my_str, n) {
  const answer = [];

  while (my_str.length > 0) {
    answer.push(my_str.substr(0, n));
    my_str = my_str.substr(n);
  }

  return answer;
}
