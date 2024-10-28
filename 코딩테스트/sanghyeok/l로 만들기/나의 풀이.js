function solution(myString) {
  var answer = "";
  let i = 0;
  while (i < myString.length) {
    if (myString[i] < "l") {
      answer += "l";
    } else {
      answer += myString[i];
    }
    i++;
  }
  return answer;
}
