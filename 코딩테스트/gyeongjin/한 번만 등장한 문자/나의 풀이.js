function solution(s) {
  s = s.split("");
  var answer = [];
  var notanswer = [];

  s.map((v) => {
    if (!answer.includes(v)) {
      answer.push(v);
    } else {
      notanswer.push(v);
    }
  });

  notanswer.map((v) => {
    answer = answer.filter((char) => char !== v);
  });

  return answer.sort().join("");
}
