function solution(n, x = 0) {
  return n % x === 1 ? x : solution(n, x + 1);
}
