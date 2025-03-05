function solution(x) {
  var answer = true;
  x = x.toString();
  let xNumber = 0;
  for (let i = 0; i < x.length; i++) {
    xNumber += +x[i];
  }
  if (+x % xNumber == 0) {
    return answer;
  }
  return false;
}
