function solution(numbers, direction) {
  var answer = [];
  const lng = numbers.length;
  if (direction == "left") {
    for (let i = 1; i < lng; i++) {
      answer.push(numbers[i]);
    }
    answer.push(numbers[0]);
  } else {
    answer.push(numbers[lng - 1]);
    for (let i = 0; i < lng - 1; i++) {
      answer.push(numbers[i]);
    }
  }
  return answer;
}
