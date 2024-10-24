function solution(my_string, n) {
  var answer = [];
  for (i = 0; i < my_string.length; i++) {
    if (i >= my_string.length - n) {
      answer.push(my_string[i]);
    }
  }
  return answer.join("");
}
