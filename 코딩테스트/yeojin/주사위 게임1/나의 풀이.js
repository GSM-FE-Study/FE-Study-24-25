function solution(a, b) {
  const A = a % 2;
  const B = b % 2;
  return A == 1 && B == 1 ? a*a+b*b : A == 1 || B == 1 ? 2*(a+b) : Math.abs(a-b);
}