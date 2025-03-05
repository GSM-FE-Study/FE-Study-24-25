function solution(a, b, n) {
  var answer = 0;
  while (true) {
    if (n < a) {
      break;
    }

    const c = Math.floor(n / a);
    n = n - c * a + c * b;
    console.log(n);
    answer += c * b;
  }
  return answer;
}
