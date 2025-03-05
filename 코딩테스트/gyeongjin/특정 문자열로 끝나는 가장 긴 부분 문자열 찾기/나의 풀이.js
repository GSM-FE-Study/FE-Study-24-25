function solution(myString, pat) {
  const idx = myString.lastIndexOf(pat);
  myString = myString.split("");
  var answer = myString.slice(0, idx);
  return answer.join("") + pat;
}
