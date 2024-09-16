function solution(a, b) {
  let x = +((a + '') + b);
  let y = +((b + '') + a);
  return x > y ? x : y;
}