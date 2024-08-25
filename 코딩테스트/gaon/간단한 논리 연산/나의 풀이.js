function solution(x1, x2, x3, x4) {
  const x1_or_x2 = x1 || x2;
  const x3_or_x4 = x3 || x4;

  return x1_or_x2 && x3_or_x4;
}
