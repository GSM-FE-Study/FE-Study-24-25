function solution(my_string) {
  const arr = [...my_string];
  const filteredStr = arr
    .map((str) => str.replace(/^[A-Za-z]+$/, " "))
    .join("");
  const splittedNumber = filteredStr.split(" ");
  const answer = splittedNumber.reduce((a, c) => Number(a) + Number(c), 0);

  return answer;
}
