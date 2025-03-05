function solution(myString) {
  var answer = [];
  let i = 0;
  let count = 0;
  while (i < myString.length) {
    if (myString[i] === "x") {
      i++;
      answer.push(count);
      count = 0;
      continue;
    }
    count++;
    i++;
  }
  answer.push(count);
  return answer;
}
