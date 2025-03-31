function solution(s) {
  var answer = s.split(" ");
  answer = answer.map((x, index) => {
    let int = x;
    if (x === "Z") {
      return 0;
    }
    if (answer[index + 1] === "Z") {
      int = 0;
    }
    return Number(int);
  });
  return answer.reduce((num, cur) => num + cur);
}
