function solution(my_string, num1, num2) {
  var answer = my_string.split("");
  return answer
    .map((x, index) =>
      index === num1 ? answer[num2] : index === num2 ? answer[num1] : x
    )
    .join("");
}
