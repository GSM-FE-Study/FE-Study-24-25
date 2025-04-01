function solution(myString, pat) {
  let result = 0;

  while (myString.indexOf(pat) >= 0) {
    result++;
    myString = myString.substr(myString.indexOf(pat) + 1);
  }

  return result;
}
