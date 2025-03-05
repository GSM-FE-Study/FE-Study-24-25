function solution(s) {
  var answer = "";
  const language = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let count = "";
  for (let i = 0; i < s.length; i++) {
    count += s[i];
    if (language.includes(count)) {
      answer += language.indexOf(count);
      count = "";
    } else if (!isNaN(s[i])) {
      answer += count;
      count = "";
    }
  }
  return +answer;
}
