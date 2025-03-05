function solution(myString) {
  var answer = "";
  let i = 0;
  while (i < myString.length) {
    if (myString[i] === "a" || myString[i] === "A") {
      answer += myString[i].toUpperCase();
      i++;
    } else {
      answer += myString[i].toLowerCase();
      i++;
    }
  }
  return answer;
}
