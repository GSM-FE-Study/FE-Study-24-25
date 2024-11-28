function solution(n) {
  var answer = 0;
  let arrString = "";
  let i = 3;
  while (true) {
    if (Math.floor(n / i) > 0) {
      arrString += n % i;
      n = Math.floor(n / i);
    } else {
      arrString += n % i;
      break;
    }
  }
  return arrString
    .split("")
    .reverse()
    .map((x, index) => +x * 3 ** index)
    .reduce((sum, value) => sum + value, 0);
}
