function solution(seoul) {
  var answer = seoul
    .map((value, index) => (value === "Kim" ? index : -1))
    .filter((x) => x !== -1);
  return `김서방은 ${answer}에 있다`;
}
